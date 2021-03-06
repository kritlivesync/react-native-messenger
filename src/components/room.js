import React, {
  Component,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PropTypes
} from 'react-native';
import { formatRoomDate } from '../utils/date';

export default class Room extends Component {
  constructor(props) {
    super(props);
  }

  _onPress() {
    this.props.onPress(this.props.roomId);
  }

  render() {
    const { name, date } = this.props;

    return (
      <TouchableOpacity
        onPress={() => this._onPress()}
        style={styles.room}>
        <View style={styles.roomTextContainer}>
          <Text style={styles.roomText}>
            {name}
          </Text>
        </View>
        <View style={styles.roomDateContainer}>
          <Text style={styles.roomDateText}>
            {formatRoomDate(date)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Room.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  roomId: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  room: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  roomTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  roomText: {
    color: '#000',
    fontSize: 16,
  },
  roomDateContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  roomDateText: {
    color: '#ccc',
    fontSize: 12,
  },
});
