import React from "react";
import { StyleSheet, View } from "react-native";

import { ProfileScreen } from "../screens";

const ProfileContainer = () => {
	return (
		<View style={styles.container}>
			<ProfileScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default ProfileContainer;
