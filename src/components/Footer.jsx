export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white pt-5 pb-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        <div className="col">
                            <h3>Bool Movie</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <div className="d-flex">
                                <i className="m-2 bi bi-facebook"></i>
                                <i className="m-2 bi bi-twitter"></i>
                                <i className="m-2 bi bi-instagram"></i>
                            </div>
                        </div>
                        <div className="col">
                            <h4>Menu</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white"></a>Link 1</li>
                                <li><a href="#" className="text-white"></a>Link 2</li>
                                <li><a href="#" className="text-white"></a>Link 3</li>
                                <li><a href="#" className="text-white"></a>Link 4</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Legal stuff</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white"></a>Link 1</li>
                                <li><a href="#" className="text-white"></a>Link 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}