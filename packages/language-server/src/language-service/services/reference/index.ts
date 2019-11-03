import {
	CUSTOM_TAGS_BY_TYPE,
	PropertyASTNode,
	YAMLDocument
} from "@serverless-ide/config"
import {
	Location,
	Range,
	TextDocument,
	TextDocumentPositionParams
} from "vscode-languageserver"

export const getReferences = (
	documentPosition: TextDocumentPositionParams,
	document: TextDocument,
	yamlDocument: YAMLDocument
): Location[] => {
	const locations: Location[] = []

	const node = yamlDocument.getNodeFromOffset(
		document.offsetAt(documentPosition.position)
	)

	if (node && node.parent instanceof PropertyASTNode) {
		const referenceable = yamlDocument.referenceables.lookup.get(
			node.parent
		)

		if (referenceable) {
			const references = yamlDocument.references.hash[referenceable.id]

			references.forEach(reference => {
				const customTag = CUSTOM_TAGS_BY_TYPE[reference.type]

				if (
					customTag &&
					customTag.referenceEntityTypes.includes(
						referenceable.entityType
					)
				) {
					locations.push(
						Location.create(
							documentPosition.textDocument.uri,
							Range.create(
								document.positionAt(reference.node.start),
								document.positionAt(reference.node.end)
							)
						)
					)
				}
			})
		}
	}

	return locations
}
