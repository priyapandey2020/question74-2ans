import React from 'react';
import { Text, View, _ScrollView } from 'react-native';
impor
import { ScrollView } from 'react-native-gesture-handler';


export default class Searchscreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allTransactions: []
    }
  }
  componentDidMount = async ()=>{
    const query = await db.collection("transactions").limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions: [...this.state.allTransactions, doc.data( )]
      })
    })
  }

    render() {
      return (
        <ScrollView>
          {this.state.allTransactions.map((transaction,index)=>{
            return(
            <View key={index} style={{borderBottomWidth: 2}}>
              <text>{"Book id: " + transaction.bookId }</text>
              <text>{"Student id: " + transaction.studentId }</text>
              <text>{"Transaction Type: " + transaction.transactionType }</text>
              <text>{"Date: " + transaction.date.toDate() }</text>
            </View>
           )
          })
        }
        </ScrollView>
      );
    }
}
