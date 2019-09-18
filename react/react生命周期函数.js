import React,{Component} from 'react';


class TodoItem extends Component{
    constructor(props) {
      super(props)
       
    }

    //当页面即将被挂载到页面的时刻自动执行
    componentWillMount() {

    }
    
    render() {
       
        return (
            <div></div>
            )
    }

    //当页面被挂载到页面上之后，自动被执行
    componentDidMount() {

    }

    //组件被更新之前，它会自动执行
    //返回一个布尔值，如果返回true，组件才会更新，返回false组件不会被更新
    //它更贴切的可以翻译为模板是否要更新
    shouldComponentUpdate() {

    }

    // 组件被更新之前，它会自动执行，但是它在shouldComponentUpdate之后执行，
    // 如果shouldComponentUpdate返回true它才执行
    // 如果shouldComponentUpdate返回false，这个函数就不会被执行了
   componentWillUpdate () {

  }

   //组件更新完成之后，它会被执行
   componentDidUpdate () {

  }
 
  //一个组件要从父组件接收参数
  //只要父组件的render()函数被重新执行了，子组件的这个生命周期函数就会被执行
  //第二句话另解：如果这个组件第一次存在于父组件中，不会被执行，如果这个组件之前已经存在于父组件中，才会被执行
  componentWillReceiveProps () {

  }

  //当这个组件即将被从这个页面剔除的时候，会被执行
  componentWillUnmount() {

  }

}


export default TodoItem;