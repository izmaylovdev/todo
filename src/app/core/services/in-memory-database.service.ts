import { InMemoryDbService } from 'angular-in-memory-web-api';
import { map } from 'rxjs/operators';


export class InMemoryDatabaseService implements InMemoryDbService {

    createDb() {
        return fetch('/assets/tasks.json')
            .then(res => res.json())
            .then(todos => ({ todos }));
    }
}
