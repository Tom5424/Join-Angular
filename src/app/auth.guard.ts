import { inject } from '@angular/core';
import { Router } from '@angular/router';


export const isLoggedIn = () => {
    const router = inject(Router);
    const userIsLogged = localStorage.getItem('isLoggedIn');


    if (userIsLogged) {
        return true;
    } else {
        router.navigateByUrl('/login');
        return false;
    }
}
