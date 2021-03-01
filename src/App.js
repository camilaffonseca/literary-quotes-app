import React, {useState, useEffect} from 'react'

import {View, Image, Text, TouchableOpacity} from 'react-native'

import {getLanguages} from './services/quotes'

const getRandomNumber = (lengthToGenerate) => {
  const randomNumber = parseInt(Math.random() * lengthToGenerate)
  return randomNumber
}

const getLiteraryQuote = () => {
  const quotes = [
    {
      quote:
        'Foi há muito tempo, mas descobri que não é verdade o que dizem a respeito do passado, essa história de que podemos enterrá-lo. Porque, de um jeito ou de outro, ele sempre consegue escapar.',
      book: 'O Caçador de Pipas',
      author: 'Khaled Hosseini',
    },
    {
      quote:
        'Enquanto eles não se conscientizarem, não serão rebeldes autênticos e, enquanto não se rebelarem, não têm como se conscientizar.',
      book: '1984',
      author: 'George Orwell',
    },
  ]

  return quotes[getRandomNumber(quotes.length)]
}
const App = () => {
  const [literaryQuote, setLiteraryQuote] = useState({})

  const handleLiteraryQuote = () => {
    const currentQuote = getLiteraryQuote()

    setLiteraryQuote(currentQuote)
  }

  useEffect(() => {
    const resolveLanguages = async () => {
      try {
        const response = await getLanguages()
        console.log(response.data)
      } catch (error) {
        console.log('Erro!!!! \n\n\n\n', error)
      }
    }

    resolveLanguages()
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('./images/logo2.png')} />
      {literaryQuote.quote && (
        <>
          <Text style={styles.quote}>{literaryQuote.quote}</Text>
          <Text style={styles.info}>
            {literaryQuote.book} - {literaryQuote.author}
          </Text>
        </>
      )}
      <TouchableOpacity
        onPress={() => handleLiteraryQuote()}
        style={styles.button}>
        <Text style={styles.buttonText}>GENERATE</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0f8caa',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 2,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  quote: {
    marginVertical: 20,
    fontSize: 17,
    textAlign: 'center',
    paddingHorizontal: 17,
    color: '#4e5b61',
    fontFamily: 'Montserrat-Regular',
  },
  info: {
    color: '#50676e',
    fontFamily: 'Montserrat-Regular',
  },
}

export default App
