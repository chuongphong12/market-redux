import {Component} from "react";


class Footer extends Component {


    render() {
        return (
            <footer className="main-footer font-xs">
                <div className="row pb-30 pt-15">
                    <div className="col-sm-6">
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        &copy; ANH.
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end">KTPM</div>
                    </div>
                </div>
            </footer>
        );
    }


}

export default Footer;