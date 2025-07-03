import { BehaviorSubject, Observable, of } from "rxjs";

export class DataService {
    private repo = new BehaviorSubject<number>(0);
    obsData = this.repo.asObservable();
    private static instance: DataService;

    private constructor() {
        // Private constructor to prevent instantiation
    }

    public static getInstance(): DataService {
        if (!DataService.instance) {
            DataService.instance = new DataService();
        }
        return DataService.instance;
    }

    publishData(data: number): void {
        this.repo.next(data);
    }
}

