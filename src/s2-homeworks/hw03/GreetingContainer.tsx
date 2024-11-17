import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import { added } from './tests/pureOnEnter.test'

type GreetingContainerPropsType = {
	users: UserType[] // need to fix any
	addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
	// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

	if (name && name !== '') {
		addUserCallback(name = name.trim())
		setName('')
	} else {
		setError('Ошибка! Введите имя!')
		setName(name)
	}
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
	if (name && name.trim() !== '') {
		return
	} else {
		setError('Ошибка! Введите имя!')
	}
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => { // если нажата кнопка Enter - добавить
	if (e.key === 'Enter') {
		addUser()
		// added: true
	}
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
	users,
	addUserCallback,
}) => {
	// деструктуризация пропсов
	// debugger
	const [name, setName] = useState<string>('') // need to fix any
	const [error, setError] = useState<string>('') // need to fix any

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
		let result = e.currentTarget.value
		setName(result) // need to fix
		// e.currentTarget.value = ''
		error && setError('')
	}
	const addUser = () => {
		pureAddUser(name, setError, setName, addUserCallback)
		
	}

	const onBlur = () => {
		pureOnBlur(name, setError)
	}

	const onEnter = (e: KeyboardEvent) => {
		pureOnEnter(e, addUser)
	}

	const totalUsers = users.length // need to fix
	// debugger
	const lastUserName = users.at(-1)?.name // need to fix

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			onBlur={onBlur}
			onEnter={onEnter}
			error={error}
			totalUsers={totalUsers}
			lastUserName={lastUserName}
		/>
	)
}

export default GreetingContainer
