"use strict"

export interface JSONSchema {
	id?: string
	$schema?: string
	type?: string | string[]
	title?: string
	default?: any
	definitions?: JSONSchemaMap
	description?: string
	doNotSuggest?: boolean
	properties?: JSONSchemaMap
	patternProperties?: JSONSchemaMap
	additionalProperties?: any
	minProperties?: number
	maxProperties?: number
	dependencies?: JSONSchemaMap | string[]
	items?: any
	minItems?: number
	maxItems?: number
	uniqueItems?: boolean
	additionalItems?: boolean
	pattern?: string
	minLength?: number
	maxLength?: number
	minimum?: number
	maximum?: number
	exclusiveMinimum?: boolean
	exclusiveMaximum?: boolean
	multipleOf?: number
	required?: string[]
	$ref?: string
	anyOf?: JSONSchema[]
	allOf?: JSONSchema[]
	oneOf?: JSONSchema[]
	not?: JSONSchema
	enum?: any[]
	format?: string
	errorMessage?: string // VSCode extension
	patternErrorMessage?: string // VSCode extension
	deprecationMessage?: string // VSCode extension
	enumDescriptions?: string[] // VSCode extension
}

export interface JSONSchemaMap {
	[name: string]: JSONSchema
}
