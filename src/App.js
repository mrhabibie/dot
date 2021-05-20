import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useForm, FormProvider } from 'react-hook-form'
import Input from './components/Input'

const App = () => {
	const methods = useForm()

	const onSubmit = data => console.log('submitted data: ', data)

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#435ac2', position: 'relative' }}>
			<StatusBar barStyle='dark-content' backgroundColor='#FFFFFF' translucent={true} />
			<View
				style={{
					flex: 1,
					alignContent: 'flex-end',
					backgroundColor: '#FFFFFF',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
					paddingHorizontal: 25,
					paddingVertical: 50
				}}>
				<Text
					style={{
						fontSize: 24,
						fontWeight: 'bold',
						color: '#435ac2',
						marginBottom: 20
					}}>DOT Freelancer Technical Test - React Native v1</Text>
				<FormProvider {...methods}>
					<Input
						style={{ marginTop: 20 }}
						name='name'
						placeholder='Name'
						defaultValue=''
						rules={{ required: 'Nama harus diisi!' }}
					/>
					<Input
						style={{ marginTop: 20 }}
						name='email'
						placeholder='Email'
						defaultValue=''
						rules={{
							required: 'Email harus diisi!',
							pattern: /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
						}}
					/>
					<Input
						style={{ marginTop: 20 }}
						name='password'
						placeholder='Password'
						defaultValue=''
						rules={{ required: 'Kata Sandi harus diisi!', minLength: 8 }}
					/>
					<TouchableOpacity
						onPress={methods.handleSubmit(onSubmit)}
						style={{
							width: 56,
							height: 56,
							borderRadius: 56,
							padding: 20,
							position: 'absolute',
							bottom: 30,
							right: 30,
							backgroundColor: '#435ac2',
							shadowOffset: { width: 0, height: 3 },
							elevation: 3
						}}>
						<Text style={{ flex: 1, alignSelf: 'center', color: '#ffffff', fontWeight: 'bold' }}>{'>'}</Text>
					</TouchableOpacity>
				</FormProvider>
			</View>
		</SafeAreaView>
	)
}

export default App

const styles = StyleSheet.create({})
