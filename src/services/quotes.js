import instance from '../providers/literaryQuotes'

export const getLanguages = () => instance.get('/languages')
