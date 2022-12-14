import HomePage from "./components/home/HomePage";
import BlogSingle from "./components/blog/BlogSingle";
import AuthorSingle from "./components/authors/AuthorSingle";
import Layout from "./components/layout";
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    return (
        <Layout>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs/:slug" element={<BlogSingle />} />
                <Route path="/authors/:slug" element={<AuthorSingle />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    );
}

export default App;
