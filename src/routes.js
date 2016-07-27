import AppComponent from './components/App';
import IndexComponent from './components/Index';
import AboutComponent from './components/About';

export const routes = {
    path: '',
    component: AppComponent,
    childRoutes: [
        { path: '/', component: IndexComponent },
        { path: '/about', component: AboutComponent },
    ],
};
