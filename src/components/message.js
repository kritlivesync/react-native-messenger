import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { formatDate } from '../utils/date';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: formatDate(props.date),
    };
  }

  componentWillMount() {
    this._tick();
  }

  _tick() {
    this.setState({
      time: formatDate(this.props.date),
    });
    this._timeout = window.setTimeout(() => this._tick(), 5000);
  }

  render() {
    const {
      alignment,
      message,
    } = this.props;
    const alignStyle = {
      alignItems: alignment === 'left' ? 'flex-start' : 'flex-end',
    };
    const messageStyle = {
      backgroundColor: alignment === 'left' ? '#c6e2ff' : '#e6e6eb',
    };
    return (
      <View style={[styles.messageContainer, styles[alignment]]}>
        <View style={[styles.timeContainer, alignStyle]}>
          <Text style={styles.timeText}>{this.state.time}</Text>
        </View>
        <View style={[styles.message, alignStyle, messageStyle]}>
          <Text style={styles.messageText}>
            {message}
          </Text>
        </View>
      </View>
    );
  }

  componentWillUnmount() {
    window.clearTimeout(this._timeout);
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
  },
  message: {
     borderRadius: 15,
     paddingLeft: 15,
     paddingRight: 15,
     paddingBottom: 10,
     paddingTop: 10,
   },
   messageText: {
     color: '#000',
     fontSize: 14,
   },
   left: {
     marginRight: 70,
   },
   right: {
     marginLeft: 70,
   },
   timeContainer: {
     justifyContent: 'center',
     padding: 5,
   },
   timeText: {
     color: '#ccc',
     fontSize: 12,
   },
});
