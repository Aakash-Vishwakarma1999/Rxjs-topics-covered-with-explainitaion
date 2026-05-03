import { Observable } from "rxjs";

export function functionObs() {
    console.log('Function called');
    return '1';
    return '2'; // dead code the compiler will not reach this line in case of function

}

export const funcObservable = new Observable((observer) => {
    console.log('observable called');
    observer.next('1');
    observer.next('2');
    setTimeout(() => {
        observer.next('3')
    }, 1000);

})