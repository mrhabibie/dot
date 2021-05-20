import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useWatch } from 'react-hook-form'

const InputValue = ({ control, label, ...props }) => {
	const inputValue = useWatch({ control, ...props })

	return <Text style={{ marginTop: 10 }}>Output {label}: {inputValue}</Text>
}

export default InputValue

const styles = StyleSheet.create({})
