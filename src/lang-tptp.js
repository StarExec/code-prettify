PR.registerLangHandler(
	PR.createSimpleLexer(
		[
			[PR.PR_COMMENT, /%.*\n*/, null, '%'],
		],
		[
			[PR.PR_COMMENT, /\/\*.*\*\//],
			/* String */
			[PR.PR_TYPE, /'(?:[\40-\46\50-\133\135-\176]|\\['\\])+'/],
			/* Language */
			[PR.PR_KEYWORD, /\b(?:tpi|thf|tfx|tff|tcf|fof|cnf)\b/],
            /* Defined Proposition */
			[PR.PR_KEYWORD, /\$(true|false)\b/],
            /* Defined Proposition */
			[PR.PR_KEYWORD, /\$(distinct|less|lesseq|greater|greatereq|is_int|is_rat|box_P|box_i|box_int|box|dia_P|dia_i|dia_int|dia)\b/],
            /* Defined Functor */
			[PR.PR_KEYWORD, /\$(uminus|sum|difference|product|quotient|quotient_e|quotient_t|quotient_f|remainder_e|remainder_t|remainder_f|floor|ceiling|truncate|round|to_int|to_rat|to_real)\b/],
			/* Formula Role */
			[PR.PR_TYPE, /\b(?:axiom|hypothesis|definition|assumption|lemma|theorem|corollary|conjecture|negated_conjecture|plain|type|fi_domain|fi_functors|fi_predicates|unknown)\b/],
			/* Atomic Type */
			[PR.PR_TYPE, /\$(?:oType|o|iType|i|tType|real|rat|int)\b/],
			/* Intro Type */
			[PR.PR_TYPE, /\b(?:definition|axiom_of_choice|tautology|assumption)\b/],
			/* Status Value */
			[PR.PR_LITERAL, /\b(?:suc|unp|sap|esa|sat|fsa|thm|eqv|tac|wec|eth|tau|wtc|wth|cax|sca|tca|wca|cup|csp|ecs|csa|cth|ceq|unc|wcc|ect|fun|uns|wuc|wct|scc|uca|noc)\b/],
			[PR.PR_PUNCTUATION, /:=|[\-+*|<>!?@=~&,]+/],
		]),
	['tptp']
);
