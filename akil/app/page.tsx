'use client';
import JobList from "./components/JobList";
import { store } from "./redux/store";
import {Provider} from 'react-redux';

export default function Home() {
  return (
    <Provider store={store}>
    <main className="flex justify-center">
      <JobList />
    </main>
    </Provider>
  );
}