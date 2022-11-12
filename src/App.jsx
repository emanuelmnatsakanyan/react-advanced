import { Layout } from "./components/Layout/Layout";
import BookInfoPage from "./pages/BookInfoPage/BookInfoPage";
import BooksPage from "./pages/BooksPage/BooksPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";

export function App() {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                    <Route path="/" element={<BooksPage />} />
                    <Route path="/books/:id" element={<BookInfoPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}