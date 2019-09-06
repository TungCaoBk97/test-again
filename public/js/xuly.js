function getName(name) {
    alert(name);
}

class TungCao extends React.Component{
    constructor(props){
        super(props);
        this.layThongTin = this.layThongTin.bind(this);
        this.addHocVien = this.addHocVien.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.state = {
            total: this.props.total
        }
    }
    deleteStudent(){
        this.setState({
            total: this.state.total - 1
        })
    }
    addHocVien(){
        this.state.total = parseInt(this.state.total) + 1;
        this.setState(this.state);
    }
    layThongTin(){
        alert(this.props.children);
    }
    render() {
        return(
            <div>
                <h1 className="mauvang">Lap trinh {this.props.ten} - {this.props.giangvien}</h1>
                <div>So hoc vien: {this.state.total}</div>
                <p>{this.props.children}</p>
                <button onClick={()=>{
                    var str = this.props.ten + ' ' + this.props.giangvien;
                    getName(str)
                }}>Thong tin</button>
                <button onClick={this.layThongTin}>Children</button>
                <button onClick={this.addHocVien}>Them hoc vien</button>
                <button onClick={this.deleteStudent}>Xoa hoc vien</button>
                <LongNhau/>
            </div>

        );
    }
}

class InputTag extends React.Component{
    constructor(props){
        super(props);
        this.show = this.show.bind(this);
        this.showSl = this.showSl.bind(this);
    }
    showSl(){
        var text = this.refs.sl.value;
        alert(text);
    }
    show(){
        var text = this.refs.txt.value;
        alert(text);
    }
    render(){
        return (
            <div>
                <input type="text" ref="txt"/>
                <button onClick={this.show}>Hien thi input</button>
                <hr/>
                <select ref="sl">
                    <option value="a">AA</option>
                    <option value="b">BB</option>
                    <option value="c">CC</option>
                </select>
                <button onClick={this.showSl}>Hien thi select</button>
            </div>
        );
    }
}

class LongNhau extends React.Component{
    render() {
        return(
            <h3>Lap trinh reactJs</h3>
        )
    }
}

class Exercise1 extends React.Component{
    constructor(props){
        super(props);
        this.addNumber = this.addNumber.bind(this);
        this.state = {
            number: this.props.number
        }
    }
    addNumber(){
        this.state.number = parseInt(this.state.number) + 1;
        this.setState(this.state);
    }
    render(){
        return(
            <div>
                <button onClick={this.addNumber} className="larger">Hello {this.state.number}</button>
            </div>
        )
    }
}

class Exercise2 extends React.Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            idImage: this.props.idImage,
        }
    }
    changeImage(){
        this.state.idImage = (this.state.idImage % 5) + 1;
        this.setState(this.state);
    }
    previous(){
        this.state.idImage = this.state.idImage == 1 ? 1 : (parseInt(this.state.idImage) - 1);
        this.setState(this.state);
    }
    next(){
        this.state.idImage = this.state.idImage == 5 ? 5 : (parseInt(this.state.idImage) + 1);
        this.setState(this.state);
    }    render(){
        return(
          <div className="div-wraper">
              <div className="image-wrap">
                  <img src={"images/" + this.state.idImage + ".png"} className="responsive"/>
              </div>
              <button onClick={this.previous}>Previous</button>
              <button onClick={this.next}>Next</button>
          </div>
        );
    }
    componentDidMount(){
        setInterval(this.changeImage.bind(this), 1000);
    }

}

class Node extends React.Component{
    render(){
        return(
            <div className="div-wraper">
                <div>
                    <img src={this.props.src} className="responsive"/>
                    <span>{this.props.children}</span>
                </div>
            </div>
        );
    }
}

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                {srcHinh: "images/1.png", noiDung: "Hello"},
                {srcHinh: "images/2.png", noiDung: "NodeJs"},
                {srcHinh: "images/3.png", noiDung: "ReactJs"},
            ],
        }
    }
    add(){
        this.state.mang.unshift({srcHinh: "images/4.png", noiDung: "Khoa Pham"});
        this.setState(this.state);
    }
    render(){
        return(
            <div>
                <button onClick={this.add.bind(this)}>Push</button>
                {this.state.mang.map((element, key)=>{
                    return <Node key={key} src={element.srcHinh}>{element.noiDung}</Node>
                })}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        {/*<InputTag/>*/}
        {/*<TungCao ten="ReactJs" giangvien="Mr.Khoa" total="10">Beginning</TungCao>*/}
        {/*<TungCao ten="NodeJs" giangvien="Mr.Pham" total="20">Junior</TungCao>*/}
        {/*<Exercise1 number="0"/>*/}
        {/*<Exercise2 idImage="1"/>*/}
        <List/>
    </div>
    , document.getElementById("root")
);

