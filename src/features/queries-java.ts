/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export = `(class_declaration
	name: (identifier) @class.name
) @class

(variable_declarator
	name: (identifier) @class.name
	value: (object_creation_expression
		.
		(_)*
		(class_body)
	)
) @class

(interface_declaration
	name: (identifier) @interface.name
) @interface

(enum_declaration
	name: (identifier) @enum.name
) @enum

(enum_constant
	name: (identifier) @enumMember.name
) @enumMember

(constructor_declaration
	name: (identifier) @method.name
) @method

(method_declaration
	name: (identifier) @method.name
) @method

(field_declaration
	declarator: ((variable_declarator 
		name: (identifier) @field.name)
	) @field
)

(module_declaration
	[
		(scoped_identifier) @module.name
		(identifier) @module.name
	]
) @module
`;
