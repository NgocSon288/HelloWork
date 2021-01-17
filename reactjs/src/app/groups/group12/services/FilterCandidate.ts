import http from 'shared/services/httpService';
export interface CandidateRequest {
    minAge: number,
    maxAge: number,
    operation: string,
    expertise: string,
    province: string,
    skills: string[]
}

export interface JobRequest {
    name: string,
    wayOfWork: string,
    salaryRange: string,
    expertises: string [],
    province: string,
    operation: string
  }

export const filterCandidate = async (candidateRequest: CandidateRequest) =>
    (await http.post("/api/Candidate/Get", candidateRequest)).data.result.items

export const filterJob = async (jobRequest: JobRequest) =>
    (await http.post("/api/Jobs/Get", jobRequest)).data.result.items

export const getExpertises = async () =>
    (await http.get("/api/Expertises/GetAll")).data.result

export const getOperations = async () =>
    (await http.get("/api/Orientation/GetAll")).data.result