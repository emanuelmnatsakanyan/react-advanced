import { Layout } from "./components/Layout/Layout";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import { books } from "./constants/mock";
import {  useState } from "react";



export function App() {
    const [activeBook, setActiveBook] = useState(null)
    return <Layout>
        {activeBook ? <BookInfoPage  book={activeBook} /> : <BooksPage setActiveBook={setActiveBook} />}
        {/* <BooksPage />
        <BookInfoPage book={books[1]} /> */}
    </Layout>
}