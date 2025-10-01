
// Form validation rules and required fields
const VALIDATION_RULES = {
    required: [
        'borough', 'block', 'lot', 'fullAddress', 'applicantName', 
        'contactName', 'contactPhone', 'mailingAddress', 'emailAddress',
        'signerName', 'signature'
    ],
    dateFields: [
        'closingDate', 'contractDate', 'workStartDate', 'workEndDate', 'signatureDate', 'dateReceived'
    ],
    phoneFields: ['contactPhone']
};

// Date format validation regex (MM/DD/YYYY)
const DATE_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

/**
 * Initialize form functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
});

/**
 * Add real-time validation indicators to form fields
 */
function setupRealTimeValidation() {
    // Add validation to required fields
    VALIDATION_RULES.required.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field) {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('invalid')) {
                    validateField(this);
                }
            });
        }
    });
    
    // Add validation to date fields
    VALIDATION_RULES.dateFields.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field) {
            field.addEventListener('blur', function() {
                validateDateField(this);
            });
        }
    });
    
    // Add validation to phone field
    const phoneField = document.getElementById('contactPhone');
    if (phoneField) {
        phoneField.addEventListener('blur', function() {
            validatePhoneField(this);
        });
    }
}

/**
 * Validate individual field and show visual feedback
 * @param {HTMLElement} field - Form field to validate
 */
function validateField(field) {
    const fieldName = field.name;
    const isRequired = VALIDATION_RULES.required.includes(fieldName);
    
    // Remove existing validation classes
    field.classList.remove('valid', 'invalid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    if (isRequired && !field.value.trim()) {
        field.classList.add('invalid');
        showFieldError(field, `${getFieldLabel(fieldName)} is required`);
        return false;
    } else if (field.value.trim()) {
        field.classList.add('valid');
        return true;
    }
    
    return true;
}

/**
 * Validate date field and show visual feedback
 * @param {HTMLElement} field - Date field to validate
 */
function validateDateField(field) {
    field.classList.remove('valid', 'invalid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    if (field.value && !DATE_REGEX.test(field.value)) {
        field.classList.add('invalid');
        showFieldError(field, 'Date must be in MM/DD/YYYY format');
        return false;
    } else if (field.value) {
        field.classList.add('valid');
        return true;
    }
    
    return true;
}

/**
 * Validate phone field and show visual feedback
 * @param {HTMLElement} field - Phone field to validate
 */
function validatePhoneField(field) {
    field.classList.remove('valid', 'invalid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    if (field.value) {
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!phoneRegex.test(field.value)) {
            field.classList.add('invalid');
            showFieldError(field, 'Phone must be in (XXX) XXX-XXXX format');
            return false;
        } else {
            field.classList.add('valid');
            return true;
        }
    }
    
    return true;
}

/**
 * Show error message for a specific field
 * @param {HTMLElement} field - Field to show error for
 * @param {string} message - Error message to display
 */
function showFieldError(field, message) {
    const errorSpan = document.createElement('span');
    errorSpan.className = 'field-error';
    errorSpan.textContent = message;
    
    // Insert after the field
    field.parentNode.insertBefore(errorSpan, field.nextSibling);
}

/**
 * Initialize all form functionality
 */
function initializeForm() {
    // Set up phone number formatting
    setupPhoneFormatting();
    
    // Set up date input formatting
    setupDateFormatting();
    
    // Set up form save/import functionality
    setupFormActions();
    
    // Set up checkbox mutual exclusivity
    setupCheckboxGroups();
    
    // Set up real-time validation
    setupRealTimeValidation();
    
    console.log('TC108 Form initialized successfully');
}

/**
 * Format phone number input as user types
 */
function setupPhoneFormatting() {
    const phoneInput = document.getElementById('contactPhone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = phoneInput.value.replace(/\D/g, ''); // Keep only digits
            let formatted = '';
            
            if (value.length > 0) formatted += '(' + value.substring(0, 3);
            if (value.length >= 4) formatted += ') ' + value.substring(3, 6);
            if (value.length >= 7) formatted += '-' + value.substring(6, 10);
            
            phoneInput.value = formatted;
        });
    }
}

/**
 * Format date inputs as user types (MM/DD/YYYY)
 */
function setupDateFormatting() {
    const dateInputs = document.querySelectorAll('.date-input');
    
    dateInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = input.value.replace(/\D/g, ''); // Keep only digits
            let formatted = '';
            
            if (value.length >= 2) {
                formatted = value.substring(0, 2) + '/';
                if (value.length >= 4) {
                    formatted += value.substring(2, 4) + '/';
                    if (value.length >= 8) {
                        formatted += value.substring(4, 8);
                    } else {
                        formatted += value.substring(4);
                    }
                } else {
                    formatted += value.substring(2);
                }
            } else {
                formatted = value;
            }
            
            input.value = formatted;
        });
        
        // Add placeholder on focus if empty
        input.addEventListener('focus', function() {
            if (!input.value) {
                input.placeholder = 'MM/DD/YYYY';
            }
        });
    });
}

/**
 * Set up form save and import functionality
 */
function setupFormActions() {
    const saveButton = document.getElementById('saveForm');
    const importButton = document.getElementById('importForm');
    const fileInput = document.getElementById('fileInput');
    
    // Save form data as JSON
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            if (validateForm()) {
                saveFormData();
            }
        });
    }
    
    // Import form data from JSON
    if (importButton) {
        importButton.addEventListener('click', function() {
            fileInput.click();
        });
    }
    
    // Handle file selection for import
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                importFormData(file);
            }
        });
    }
}

/**
 * Set up mutual exclusivity for checkbox groups
 */
function setupCheckboxGroups() {
    // Define checkbox groups that should be mutually exclusive
    const checkboxGroups = [
        ['buyProperty'],
        ['signedContract'],
        ['offering'],
        ['refinanced'],
        ['construction'],
        ['description'],
        ['boardAuthority'],
        ['propertyType'],
        ['basement'],
        ['rentedNonResidential'],
        ['signerType'],
        ['willRepresentative'],
        ['representativeType']
    ];
    
    checkboxGroups.forEach(groupName => {
        const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    // Uncheck other checkboxes in the same group
                    checkboxes.forEach(cb => {
                        if (cb !== this) {
                            cb.checked = false;
                        }
                    });
                }
            });
        });
    });
}

/**
 * Validate form data according to validation rules
 * @returns {boolean} True if form is valid, false otherwise
 */
function validateForm() {
    const errors = [];
    const warnings = [];
    
    // Check required fields
    VALIDATION_RULES.required.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field && !field.value.trim()) {
            errors.push(`${getFieldLabel(fieldName)} is required`);
        }
    });
    
    // Validate date fields
    VALIDATION_RULES.dateFields.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (field && field.value && !DATE_REGEX.test(field.value)) {
            errors.push(`${getFieldLabel(fieldName)} must be in MM/DD/YYYY format`);
        }
    });
    
    // Validate phone number
    const phoneField = document.getElementById('contactPhone');
    if (phoneField && phoneField.value) {
        const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!phoneRegex.test(phoneField.value)) {
            errors.push('Phone number must be in (XXX) XXX-XXXX format');
        }
    }
    
    // Check if at least one description is selected
    const descriptionCheckboxes = document.querySelectorAll('input[name="description"]');
    const hasDescription = Array.from(descriptionCheckboxes).some(cb => cb.checked);
    if (!hasDescription) {
        errors.push('Please select an applicant description');
    }
    
    // Check if at least one signer type is selected
    const signerTypeCheckboxes = document.querySelectorAll('input[name="signerType"]');
    const hasSignerType = Array.from(signerTypeCheckboxes).some(cb => cb.checked);
    if (!hasSignerType) {
        errors.push('Please select a signer type');
    }
    
    // Conditional validation: if signerType is fiduciary, require fiduciaryRelationship
    const selectedSignerType = Array.from(document.querySelectorAll('input[name="signerType"]'))
      .find(cb => cb.checked)?.value;
    if (selectedSignerType === 'fiduciary') {
        const rel = document.querySelector('[name="fiduciaryRelationship"]');
        if (rel && !rel.value.trim()) {
            errors.push('Fiduciary relationship is required');
            rel.classList.add('invalid');
        }
    }

    // Display validation results
    displayValidationMessages(errors, warnings);
    
    return errors.length === 0;
}

/**
 * Get user-friendly label for form field
 * @param {string} fieldName - Name of the form field
 * @returns {string} User-friendly label
 */
function getFieldLabel(fieldName) {
    const labels = {
        'borough': 'Borough',
        'block': 'Block',
        'lot': 'Lot',
        'fullAddress': 'Full Address',
        'applicantName': 'Applicant Name',
        'contactName': 'Contact Name',
        'contactPhone': 'Phone Number',
        'mailingAddress': 'Mailing Address',
        'emailAddress': 'Email Address',
        'closingDate': 'Closing Date',
        'contractDate': 'Contract Date',
        'workStartDate': 'Work Start Date',
        'workEndDate': 'Work End Date',
        'signerName': 'Signer Name',
        'signature': 'Signature',
        'signatureDate': 'Signature Date'
    };
    
    return labels[fieldName] || fieldName;
}

/**
 * Display validation messages to user
 * @param {Array} errors - Array of error messages
 * @param {Array} warnings - Array of warning messages
 */
function displayValidationMessages(errors, warnings) {
    const messagesDiv = document.getElementById('validationMessages');
    
    if (errors.length > 0) {
        messagesDiv.className = 'validation-messages error';
        messagesDiv.innerHTML = '<strong>Please fix the following errors:</strong><ul>' +
            errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
    } else if (warnings.length > 0) {
        messagesDiv.className = 'validation-messages warning';
        messagesDiv.innerHTML = '<strong>Warnings:</strong><ul>' +
            warnings.map(warning => `<li>${warning}</li>`).join('') + '</ul>';
    } else {
        messagesDiv.className = 'validation-messages success';
        messagesDiv.innerHTML = '<strong>Form is valid!</strong>';
    }
}

/**
 * Save form data as JSON file
 */
function saveFormData() {
    const formData = collectFormData();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `tc108-form-${timestamp}.json`;
    
    // Create and download JSON file
    const dataStr = JSON.stringify(formData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = filename;
    link.click();
    
    // Show success message
    displayValidationMessages([], []);
    setTimeout(() => {
        const messagesDiv = document.getElementById('validationMessages');
        messagesDiv.className = 'validation-messages success';
        messagesDiv.innerHTML = `<strong>Form saved successfully as ${filename}</strong>`;
    }, 100);
    
    console.log('Form data saved:', formData);
}

/**
 * Import form data from JSON file
 * @param {File} file - JSON file to import
 */
function importFormData(file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const formData = JSON.parse(e.target.result);
            populateForm(formData);
            
            // Show success message
            const messagesDiv = document.getElementById('validationMessages');
            messagesDiv.className = 'validation-messages success';
            messagesDiv.innerHTML = `<strong>Form imported successfully from ${file.name}</strong>`;
            
            console.log('Form data imported:', formData);
        } catch (error) {
            console.error('Error importing form data:', error);
            
            // Show error message
            const messagesDiv = document.getElementById('validationMessages');
            messagesDiv.className = 'validation-messages error';
            messagesDiv.innerHTML = '<strong>Error importing form:</strong> Invalid JSON file format';
        }
    };
    
    reader.readAsText(file);
}

/**
 * Collect all form data into a structured object
 * @returns {Object} Form data object
 */
function collectFormData() {
    const formData = {
        timestamp: new Date().toISOString(),
        version: '1.0',
        data: {}
    };
    
    // Collect all form inputs
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        if (input.name) {
            if (input.type === 'checkbox') {
                // Handle checkboxes
                if (!formData.data[input.name]) {
                    formData.data[input.name] = [];
                }
                if (input.checked) {
                    formData.data[input.name].push(input.value);
                }
            } else if (input.type === 'radio') {
                // Handle radio buttons
                if (input.checked) {
                    formData.data[input.name] = input.value;
                }
            } else {
                // Handle text inputs, selects, etc.
                formData.data[input.name] = input.value;
            }
        }
    });
    
    return formData;
}

/**
 * Populate form with imported data
 * @param {Object} formData - Form data object to populate
 */
function populateForm(formData) {
    if (!formData.data) {
        throw new Error('Invalid form data structure');
    }
    
    // Populate all form inputs
    Object.keys(formData.data).forEach(fieldName => {
        const inputs = document.querySelectorAll(`[name="${fieldName}"]`);
        
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                // Handle checkboxes
                const values = Array.isArray(formData.data[fieldName]) 
                    ? formData.data[fieldName] 
                    : [formData.data[fieldName]];
                input.checked = values.includes(input.value);
            } else if (input.type === 'radio') {
                // Handle radio buttons
                input.checked = input.value === formData.data[fieldName];
            } else {
                // Handle text inputs, selects, etc.
                input.value = formData.data[fieldName] || '';
            }
        });
    });
    
    console.log('Form populated with imported data');
}

/**
 * Utility function to format date for display
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string
 */
function formatDate(dateString) {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    } catch (error) {
        return dateString;
    }
}

/**
 * Utility function to clear all validation messages
 */
function clearValidationMessages() {
    const messagesDiv = document.getElementById('validationMessages');
    messagesDiv.className = 'validation-messages';
    messagesDiv.innerHTML = '';
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        collectFormData,
        populateForm,
        formatDate
    };
}