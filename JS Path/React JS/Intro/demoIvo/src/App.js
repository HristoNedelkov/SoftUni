import Header from './components/Header';
import Footer from './components/Footer';
import Lorem, { someValue } from './components/Lorem';
import './App.css';

function App() {

    return (
        <div className="site-wrapper">
            <Header>Hello From App Component</Header>

            <main>
                <Lorem />
                <Lorem />
                <Lorem />
            </main>

            <Footer />
        </div>
    );
}

export default App;
