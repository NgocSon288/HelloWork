export interface ServiceApprove {
    id: number;
    name: string;
    description: string;
    serviceId: number;
    employerId: number;
    employerName: string;
    unit: string;
    registrationDate: string;
    remainUseTimes: number;
    status: string;
}