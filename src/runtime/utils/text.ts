export const titleCase = (text: string, skipShortWords = true) => {
  // Define words to skip
  const shortWords = ['and', 'an', 'the', 'a', 'but', 'for', 'at', 'by', 'to']

  // Split words
  const words = text.split(' ')
  const titleWords = []

  for (const [i] of words.entries()) {
    if (skipShortWords && shortWords.includes(words[i])) {
      // Force uppercase if it's the first word
      if (i === 0) {
        titleWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
      }
      else {
        titleWords.push(words[i])
      }
    }
    else {
      titleWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
    }
  }

  return titleWords.join(' ')
}

export function capitalizeFirstLetter(text: string) {
  if (!text) {
    return ''
  }

  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function fullName(firstName: string, lastName: string) {
  let name = ''
  if (firstName && lastName) {
    name = `${firstName} ${lastName}`
  }
  else if (firstName) {
    name = firstName
  }
  else if (lastName) {
    name = lastName
  }
  return name
}

export function parseFullName(fullName: string | undefined | null) {
  let firstName = ''
  let lastName = ''
  if (fullName) {
    const nameSplit = fullName.split(' ')
    firstName = nameSplit[0]

    if (nameSplit.length > 1) {
      lastName = nameSplit.slice(1).join(' ')
    }
  }

  return { firstName, lastName }
}

export const honoraryName = (name: string, honorificSuffix = '') => {
  return honorificSuffix ? `${name}, ${honorificSuffix}` : name
}

export function getPronouns(gender: string) {
  if (gender === 'male') {
    return {
      single: 'he',
      plural: 'he\'s',
      possessive: 'his',
      possessivePlural: 'his',
    }
  }
  else if (gender === 'female') {
    return {
      single: 'she',
      plural: 'she\'s',
      possessive: 'her',
      possessivePlural: 'her\'s',
    }
  }
  else {
    return {
      single: 'they',
      plural: 'they\'re',
      possessive: 'their',
      possessivePlural: 'theirs',
    }
  }
}

export const formatPhone = (input: string, separator = '-') => {
  let phone = input

  // Remove +1 country code
  if (phone.slice(0, 2) === '+1') {
    phone = phone.slice(2)
  }

  // Add the separators
  if (phone.length === 10) {
    phone = phone.replace(
      /(\d{3})(\d{3})(\d{4})/,
      `$1${separator}$2${separator}$3`,
    )
  }
  return phone
}

export function formatDate(date: string, locale = 'en-us') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatDateTime(date: string, locale = 'en-us') {
  return new Date(date).toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

export function booleanToText(bool: boolean) {
  return bool ? 'Yes' : 'No'
}

export const truncate = (text: string, maxLength = 80, ellipses = true) => {
  if (text.length > maxLength) {
    // Trim the string to the maximum length
    let trimmedString = text.substring(0, maxLength + 1)

    // Re-trim if we are in the middle of a word
    trimmedString = trimmedString.substring(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')),
    )
    return `${trimmedString}${ellipses ? '...' : ''}`
  }
  return text
}

export const slugify = (text: string) => {
  return text
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/[^a-z0-9\s_-]/g, '') // Remove characters that are NOT alphanumeric (a-z, 0-9), whitespace, hyphens, or underscores
    .replace(/[\s_]+/g, '-') // Replace sequences of one or more whitespace characters and/or underscores with a single hyphen
    .replace(/-{2,}/g, '-') // Replace multiple consecutive hyphens with a single hyphen
    .replace(/^-+|-+$/g, '') // Remove any leading or trailing hyphens
}

export const unslugify = (text: string) => {
  return text.replace(/-/g, ' ') // Replace hyphens with spaces
}

// Not inspired by this, but useful reference for corner cases:
// https://github.com/plurals/pluralize
export function pluralize(value: number, units: string, showValue = true) {
  let text = ''
  let unitsPlural = units

  // Account for units that end in "y"
  if (unitsPlural.slice(-1) === 'y') {
    unitsPlural = unitsPlural.slice(0, -1) + 'ies'
  }
  // Add an "s" by default
  else {
    unitsPlural = units + 's'
  }

  if (showValue) {
    if (value === 1) {
      text = `${value} ${units}`
    }
    else {
      text = `${value} ${unitsPlural}`
    }
  }
  else if (!value || value === 1) {
    text = `${units}`
  }
  else {
    text = `${unitsPlural}`
  }

  return text
}

export const getLanguageName = (
  languageCode: string,
  displayLanguage = 'en',
) => {
  try {
    const languageNames = new Intl.DisplayNames([displayLanguage], {
      type: 'language',
    })
    return languageNames.of(languageCode)
  }
  catch (error) {
    console.error(
      `Error getting language name for code '${languageCode}' with locale '${displayLanguage}':`,
      error,
    )
    return languageCode // Fallback to the input code if an error occurs
  }
}

/**
 * Determines the correct indefinite article ("a" or "an") for a given string
 * and optionally prepends it to the string.
 *
 * @param text The input string for which to determine the article.
 * @param includeText If true (default), returns the article followed by the original text (e.g., "an apple").
 * If false, returns only the article (e.g., "an").
 * @returns The determined article, optionally with the original text, or an empty string
 * if the input text is empty and includeText is false, or the original text if empty and includeText is true.
 */
export function addArticle(
  text: string | undefined,
  includeText = true,
): string {
  // Handle empty string case first
  if (!text) return ''

  const firstLetter = text[0].toLowerCase()
  // Extended list of vowels for basic check.
  // Does not handle phonetic exceptions like "hour" (needs "an") or "university" (needs "a").
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u']
  let article: string

  if (vowels.includes(firstLetter)) {
    article = 'an'
  }
  else {
    // A more complex check could be added here for numbers that sound like they start with a vowel,
    // e.g., "8" (an eight), "11" (an eleven).
    // For simplicity, this version treats numbers starting with '1', '8' etc., based on their first character's type.
    // If the first char is a digit that isn't 'a,e,i,o,u', it gets 'a'.
    // This is a common simplification.
    article = 'a'
  }

  if (includeText) {
    return `${article} ${text}`
  }
  else {
    return article
  }
}
