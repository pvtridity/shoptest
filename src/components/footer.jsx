function Footer() {
    return <footer className="page-footer green darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Satzhanov Marat
            <a className="grey-text text-lighten-4 right" href="https://github.com/pvtridity/shoptest">Repository</a>
            </div>
          </div>
        </footer>           
}
export {Footer};