import { DbOccasions } from '../occasion/db_occasions.js';
import { LocalizationService } from '../../services/localization_service.js';
import { OccasionCard } from '../occasion/occasion_card.js';
import { UnitStrings } from './unit_strings.js';

export class UnitPage {
    static allOccasions = [];
    static container = null;
    static searchInput = null;

    static init(containerId, searchId) {
        UnitPage.container = document.getElementById(containerId);
        UnitPage.searchInput = document.getElementById(searchId);

        if (UnitPage.searchInput) {
            UnitPage.searchInput.placeholder = UnitStrings.search + '...';
            UnitPage.searchInput.addEventListener('input', (e) => {
                UnitPage.filter(e.target.value);
            });
            const clearBtn = document.getElementById('clear-search');
            if (clearBtn) {
                 clearBtn.onclick = () => {
                     UnitPage.searchInput.value = '';
                     UnitPage.filter('');
                 };
            }
        }
    }

    static async loadOccasions(orgId) {
        try {
            const occasions = await DbOccasions.getPublicOccasions(orgId);
            UnitPage.allOccasions = occasions || [];
            UnitPage.render(UnitPage.allOccasions);
        } catch (e) {
            console.error("UnitPage.loadOccasions failed:", e);
            UnitPage.container.innerHTML = `<p style="text-align:center; color:red">Failed to load events: ${e.message}</p>`;
        }
    }

    static filter(term) {
        const clearBtn = document.getElementById('clear-search');
        if (clearBtn) clearBtn.style.display = term ? 'block' : 'none';
        
        if (!term) {
            UnitPage.render(UnitPage.allOccasions);
            return;
        }
        
        const norm = str => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";
        const q = norm(term);
        
        const filtered = UnitPage.allOccasions.filter(o => norm(o.title).includes(q));
        UnitPage.render(filtered, true);
    }

    static render(occasions, isSearch = false) {
        if (!UnitPage.container) {
             console.error("UnitPage.render: Container not found!");
             return;
        }
        UnitPage.container.innerHTML = '';

        if (!occasions || occasions.length === 0) {
            UnitPage.container.innerHTML = `<div style="text-align:center; padding: 20px">${UnitStrings.noEventsFound}</div>`;
            return;
        }



        const now = new Date();
        const present = occasions.filter(o => new Date(o.start_time) <= now && new Date(o.end_time) >= now);
        const upcoming = occasions.filter(o => new Date(o.start_time) > now).sort((a,b) => new Date(a.start_time) - new Date(b.start_time));
        const past = occasions.filter(o => new Date(o.end_time) < now).sort((a,b) => new Date(b.end_time) - new Date(a.end_time));

        if (present.length) UnitPage.renderSection(UnitStrings.happeningNow, present, true);
        if (upcoming.length) UnitPage.renderSection(UnitStrings.upcomingEvents, upcoming);
        if (past.length) UnitPage.renderSection(UnitStrings.pastEvents, past, false, true);
    }

    static renderSection(title, list, isPresent = false, isPast = false) {
        const section = document.createElement('div');
        section.innerHTML = `<h2 class="section-title" style="font-size:24px; font-weight:bold; margin:24px 0 16px;">${title}</h2>`;
        
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
        grid.style.gap = '16px';
        
        list.forEach(oc => {
            grid.appendChild(OccasionCard.create(oc, isPresent, isPast));
        });
        
        section.appendChild(grid);
        UnitPage.container.appendChild(section);
    }
}
