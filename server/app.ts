import express = require('express');
import { Company } from './modules/Company';

const app: express.Application = express();

const scottsCompany: Company = new Company();
scottsCompany.init();

app.get('/', (req: express.Request,res: express.Response) =>{
    res.send('Da dun');
});

app.get('/api/staff/names/first', (req: express.Request, res: express.Response) => {
    res.send({
        first_names : scottsCompany.getFirstNames()
    });
});

app.get('/api/staff/names/last', (req: express.Request, res: express.Response) => {
    res.send({
        last_names : scottsCompany.getLastNames()
    });
});

app.get('/api/staff/names/full', (req: express.Request, res: express.Response) => {
    res.send({
        full_names : scottsCompany.getFullNames()
    });
});

app.get('/api/salary/total', (req: express.Request, res: express.Response) => {
    res.send({
        total_salaries: scottsCompany.getTotalSalaries()
    })
});

app.get('/api/salary/all', (req: express.Request, res: express.Response) => {
    res.send({
        all_salaries: scottsCompany.getAllSalaries()
    });
});

app.get('/api/staff/hire/all', (req: express.Request, res: express.Response) => {
    res.send({
        all_hires: scottsCompany.getHireLog()
    });
});

app.get('/api/staff/fire/all', (req: express.Request, res: express.Response) => {
    res.send({
        all_fires: scottsCompany.getFireLog()
    });
});

app.get('/api/history/all', (req: express.Request, res: express.Response) => {
    res.send({
        log: scottsCompany.getLog()
    })
});



app.listen(3000, () => {
    console.log(`Listening on port 3000!`);
});