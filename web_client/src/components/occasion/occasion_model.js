import { FeatureService } from '../features/feature_service.js';
import { FeatureConstants } from '../features/feature_constants.js';

export class OccasionModel {
    static metaId = 'id';
    static metaTitle = 'title';
    static metaDescription = 'description';
    static metaLink = 'link';
    static metaStartTime = 'start_time';
    static metaEndTime = 'end_time';
    static metaIsOpen = 'is_open';
    static metaIsHidden = 'is_hidden';
    static metaData = 'data';
    static metaOrganization = 'organization';
    static metaUnit = 'unit';
    static metaForm = 'form';
    static metaFeatures = 'features';

    constructor(data = {}) {
        this.id = data[OccasionModel.metaId];
        this.title = data[OccasionModel.metaTitle];
        this.description = data[OccasionModel.metaDescription];
        this.link = data[OccasionModel.metaLink];
        this.start_time = data[OccasionModel.metaStartTime] ? new Date(data[OccasionModel.metaStartTime]) : null;
        this.end_time = data[OccasionModel.metaEndTime] ? new Date(data[OccasionModel.metaEndTime]) : null;
        this.is_open = data[OccasionModel.metaIsOpen];
        this.is_hidden = data[OccasionModel.metaIsHidden];
        this.data = data[OccasionModel.metaData] || {};
        this.organization = data[OccasionModel.metaOrganization];
        this.unit = data[OccasionModel.metaUnit];
        this.form = data[OccasionModel.metaForm] || null; // Raw form object (id, link, etc)
        
        // Parse Features
        this.features = [];
        if (data[OccasionModel.metaFeatures] && Array.isArray(data[OccasionModel.metaFeatures])) {
            this.features = data[OccasionModel.metaFeatures].map(f => ({
                code: f.code,
                isEnabled: f.is_enabled, // DB usually sends snake_case or whatever the view returns
                data: f.data
            }));
        } else {
             // If features are not present or null, initialize empty
             this.features = [];
        }
    }

    static fromJson(json) {
        return new OccasionModel(json);
    }
}
