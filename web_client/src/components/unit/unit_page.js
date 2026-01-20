import { Component } from '../base/component.js';
import { DbOccasions } from '../occasion/db_occasions.js';
import { LocalizationService } from '../../services/localization_service.js';
import { OccasionCard } from '../occasion/occasion_card.js';
import { UnitStrings } from './unit_strings.js';

export class UnitPage extends Component {
    constructor(hostId) {
        super(hostId);
        this.allOccasions = [];
        this.searchInput = null;
    }

    init(searchId) {
        this.searchInput = document.getElementById(searchId);

        if (this.searchInput) {
            this.searchInput.placeholder = UnitStrings.search + '...';
            this.searchInput.addEventListener('input', (e) => {
                this.filter(e.target.value);
            });
            const clearBtn = document.getElementById('clear-search');
            if (clearBtn) {
                 clearBtn.onclick = () => {
                     this.searchInput.value = '';
                     this.filter('');
                 };
            }
        }
    }

    async loadOccasions(orgId) {
        try {
            const occasions = await DbOccasions.getPublicOccasions(orgId);
            this.allOccasions = occasions || [];
            this.allOccasions = occasions || [];
            this.render(this.allOccasions);

            // Check for search query param (?q=...)
            const params = new URLSearchParams(window.location.search);
            const query = params.get('q');
            if (query && this.searchInput) {
                console.log('UnitPage: Auto-filtering for query:', query);
                this.searchInput.value = query;
                this.filter(query);
            }
        } catch (e) {
            console.error("UnitPage.loadOccasions failed:", e);
            if (this.host) {
                this.host.innerHTML = `<p style="text-align:center; color:red">Failed to load events: ${e.message}</p>`;
            }
        }
    }

    filter(term) {
        const clearBtn = document.getElementById('clear-search');
        if (clearBtn) clearBtn.style.display = term ? 'block' : 'none';
        
        if (!term) {
            this.render(this.allOccasions);
            return;
        }
        
        const norm = str => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
        const q = norm(term);
        
        const filtered = this.allOccasions.filter(o => norm(o.title).includes(q));
        this.render(filtered, true);
    }

    render(occasions, isSearch = false) {
        this.clear();

        if (!occasions || occasions.length === 0) {
            const noEvents = document.createElement('div');
            noEvents.style.textAlign = 'center';
            noEvents.style.padding = '20px';
            noEvents.textContent = UnitStrings.noEventsFound;
            this.host.appendChild(noEvents);
            return;
        }

        const now = new Date();
        const present = occasions.filter(o => new Date(o.start_time) <= now && new Date(o.end_time) >= now);
        const upcoming = occasions.filter(o => new Date(o.start_time) > now).sort((a,b) => new Date(a.start_time) - new Date(b.start_time));
        const past = occasions.filter(o => new Date(o.end_time) < now).sort((a,b) => new Date(b.end_time) - new Date(a.end_time));

        if (present.length) this.renderSection(UnitStrings.happeningNow, present, true);
        if (upcoming.length) this.renderSection(UnitStrings.upcomingEvents, upcoming);
        if (past.length) this.renderSection(UnitStrings.pastEvents, past, false, true);
    }

    renderSection(title, list, isPresent = false, isPast = false) {
        const section = document.createElement('div');
        
        const titleEl = document.createElement('h2');
        titleEl.className = 'section-title';
        titleEl.style.fontSize = '24px';
        titleEl.style.fontWeight = 'bold';
        titleEl.style.margin = '24px 0 16px';
        titleEl.textContent = title;
        section.appendChild(titleEl);
        
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
        grid.style.gap = '16px';
        
        list.forEach(oc => {
            grid.appendChild(OccasionCard.create(oc, isPresent, isPast));
        });
        
        section.appendChild(grid);
        this.host.appendChild(section);
    }
}
