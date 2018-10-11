import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component{
	render()
	{
return(
	<Text style={salon.judul}>{this.props.title}</Text>
	)
	}
}
const salon = {
	judul: {
		color: '#f66',
		fontSize: 30,
		fontWeight: 'bold',
	}
}
export default Judul;