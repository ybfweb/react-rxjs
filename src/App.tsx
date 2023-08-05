import * as React from 'react';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, map, pluck, tap } from 'rxjs';
import './style.css';

export default function App() {
  const userFetch = fromFetch('https://api.github.com/users/ybfweb');
  const user$ = userFetch.pipe(
    switchMap((res) => res.json()),
    map((item) => {
      console.log('item');
      return item;
    }),
    tap((item) => {
      console.log(item);
    })
  );
  // const user = fromFetch('/user').pipe(
  //   switchMap((response) => {
  //     return response.json();
  //   })
  //   // catchError((err) => {
  //   //   // Network or other error, handle appropriately
  //   //   console.error(err);
  //   //   return of({ error: true, message: err.message });
  //   // })
  // );

  const [userImg, setUserImg] = React.useState('');
  // user$.subscribe((data) => {
  //   console.log(data);
  //   // setUserImg(data);
  // });
  return (
    <div>
      <img src={userImg} style={{ width: '100px' }} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
