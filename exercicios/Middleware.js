export function getMiddlewareAcronym(description) {
    const acronyms = {
        "APPLICATION MIDDLEWARE": "AM",
        "ROUTER MIDDLEWARE": "RM",
        "ERROR HANDLING MIDDLEWARE": "EHM",
        "BUILT-IN MIDDLEWARE": "BIM",
        "THIRD-PARTY MIDDLEWARE": "TPM"
    };

    const upperDescription = description.toUpperCase();

    if (acronyms[upperDescription]) {
        return acronyms[upperDescription];
    }

    return "Unknown Description";
}