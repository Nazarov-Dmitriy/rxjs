import { ajax } from 'rxjs/ajax';
import { from, of } from 'rxjs';

const data$ = from(ajax.getJSON('https://api.github.com/search/repositories?q=d'));

data$.subscribe((value) => console.log('data$ value', value));

const dataGitLab$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');

dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));

const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5')

obs$.subscribe((value) => console.log('obs$ value users', value));

const todos$ = ajax.getJSON('https://jsonplaceholder.typicode.com/todos')

todos$.subscribe((value) => {
    console.log('todos$ value ', value)
});