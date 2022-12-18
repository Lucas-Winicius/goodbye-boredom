const Jumbotron = ({ ClickEvent }) =>

    <div className="py-4 container">
        <div className="p-5 mt-5 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Goodbye Boredom</h1>
                <p className="col-md-8 fs-4">Is bored? Your problem ends here. We have several creative ways to help you. Click the button below and see.</p>
                <button className="btn btn-outline-primary btn-lg" type="button" onClick={(e) => ClickEvent(e)}>Go</button>
            </div>
        </div>
    </div>

export default Jumbotron