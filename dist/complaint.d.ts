export interface BaseComplaint {
    complaint_identifier: string;
    detail_text: string;
    caller_name: string;
    caller_address: string;
    caller_email: string;
    caller_phone_1: string;
    caller_phone_2: string;
    caller_phone_3: string;
    location: {
        type: string;
        coordinates: Array<number>;
    };
    location_summary_text: string;
    location_detailed_text: string;
    reported_by_code: string;
    reported_by_other_text: string;
    incident_utc_datetime?: Date;
    create_user_id: string;
    update_user_id: string;
    webeoc_identifier: string;
    isPrivacyRequested: string;
}
