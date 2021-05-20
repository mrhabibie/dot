import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useFormContext, Controller } from 'react-hook-form'
import InputValue from '../InputValue'

const Input = ({ placeholder, name, style, rules, defaultValue }) => {
	const { control, formState: { errors } } = useFormContext()

	return (
		<View style={{ ...style }}>
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						value={value}
						style={{
							fontSize: 16,
							color: '#000000'
						}}
						placeholder={placeholder}
						placeholderTextColor='#878fb4'
						underlineColorAndroid='#878fb4'
					/>
				)}
				name={name}
				rules={{ ...rules }}
				defaultValue={defaultValue}
			/>
			{ errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
			{errors[name] && errors[name].type === 'pattern' && <Text style={styles.error}>{placeholder} tidak valid!</Text>}
			{errors[name] && errors[name].type === 'minLength' && <Text style={styles.error}>Min. panjang karakter {placeholder} {rules.minLength}</Text>}

			<InputValue control={control} label={placeholder} name={name} defaultValue={defaultValue} />
		</View>
	)
}

export default Input

const styles = StyleSheet.create({
	error: {
		fontSize: 12,
		color: 'red'
	}
})
