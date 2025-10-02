# Add indentation to code
_Exported on 30/09/2025 at 20:06:55 EEST from Cursor (1.7.12)_


---

**User**

The signer of ..... 
this line must be outside the frame

---

**Cursor**

Let me check `index.html` to find the signer line and the frame structure so I can move it outside the frame.

I'll move the signer paragraph outside the `page-frame` by closing the frame before it in `index.html`.

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      
      <!-- YEAR, BOROUGH ... -->
      <div class="row-full">
        <div class="row-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-bottom">
          <div class="word-block">
            <span class="field-bold">2025/26</span>
          </div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <div class="separator"></div>


      <div class="application-header">
        <div class="header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <p class="instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <div class="separator"></div>
     
        <p class="notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
        </p>
      
        <div class="notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
        </div>
        <div class="separator"></div>
        <div class="instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <div class="separator"></div>
          <div class="block-1">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <div class="separator"></div>

          <table class="table-row6">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <div class="full-address-block">
            <div class="full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="full-address-input">
          </div>
          <div class="separator"></div>
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- a) APPLICANT’S NAME -->
          <div class="form-row row-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- b) APPLICANT DESCRIPTION -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <div class="checkbox-row">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p class="indent-paragraph"><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <div class="separator"></div>
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <div class="separator"></div>
          <table class="table-row-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <table class="table-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="separator"></div>
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
instructions for an explanation of market value.
          </div>
          <div class="separator"></div>
          <div class="market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          
          


          <div class="separator"></div>
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="separator"></div>
<div class="hearing-row">
  <div class="hearing-left">
    <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
    <div class="or-block">OR</div>
    <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
    <label><input type="checkbox"> Telephone hearing</label><br>
    <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
  </div>
  <div class="hearing-right">
    <div class="arrow">←</div>
    <div class="date-received">DATE RECEIVED</div>
  </div>
</div>
</div>
<p>
  The signer of this application must initial this page if a two-sided application form is not used. 
  Signer’s initials: <input type="text" name="signerInitials" maxlength="5" placeholder="______">
</p>
    
       
  </form>

  <script src="script.js"></script>
</body>
</html>



```

- Moved the signer paragraph outside the `page-frame` so it sits below the framed content.

Want me to style it differently (e.g., smaller text, dashed border, alignment)?

---

**User**

hearing-right 
painted in gray but the color does not fill completely
from the bottom and right to the frame 
what advice to fix

---

**Cursor**

I'll update `style.css` to make `.hearing-right` bleed to the right and bottom edges of the `page-frame` using negative margins, and compensate with padding so content spacing remains consistent.

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px;
  }
  
  .page-frame {
    position: relative;
    border: 1px solid black;
    padding: 5px;
  }
  
  .separator {
    position: absolute;
    left: 0;
    right: 0;
    border-top: 1px solid black;
  }
  
  /* YEAR, BOROUGH ... */
  .row-full {
    display: flex;
    flex-direction: column;
    height: 45px;
  }
  
  .row-top {
    display: flex;
    justify-content: space-between;
  }
  
  .row-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .field-bold {
    font-weight: bold;
  }
  
  .word-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }
  
  .field-input {
    border: none;
    border-bottom: 2px solid black;
    font-size: 14px;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .field-input:focus {
    outline: none;
  }
  
  /* Application header */
  .application-header {
    padding: 5px 0;
  }
  .instructions-block{
    margin-top: 3px;
  }
  
  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  
  .header-logo {
    width: 20%;           
    max-width: 140px;
    height: auto;
  }
  
  .logo-right {
    width: 30%;     
    max-width: 160px; 
  }
  
  
  .header-center-text {
    text-align: center;
    font-size: 24px;
    line-height: 1.3;
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .instructions-text {
    font-size: 21px;
    line-height: 1;
    text-align: left;
    margin-top: 2px;
  }

  
  .notice-text {
    font-size: 20px;
    line-height: 1;
    margin-bottom: 5px; 
  }
  
  .notice-options label {
    display: inline-block; 
    margin-right: 20px;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
  }
  
  .notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .instructions-block {
    font-size: 16px;
    line-height: 1;

  }
  .instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  .block-1 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  }
  .table-row6 {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0;
    table-layout: fixed;
  }
  
  .table-row6 th, .table-row6 td {
    border-left: 1px solid black;  
    padding: 4px;
    text-align: center;
    vertical-align: middle;
  }
  
  .table-row6 th:first-child,
  .table-row6 td:first-child {
    border-left: none;
  }
  
  .table-row6 th:last-child,
  .table-row6 td:last-child {
    border-right: none; 
  }
  
  .table-row6 th {
    font-size: 10px;
    white-space: nowrap;
    font-weight: normal; 
  }
  
  .table-row6 td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  
  .field-bold {
    font-weight: bold; 
  }
  .full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .full-address-block {
    margin-top: 3px;
  }

  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;        
  }
  .row-inline {
    display: flex;
    align-items: center;
    gap: 8px; 
  }
  
  .form-input-inline {
    flex: 1;           
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box;
  }
  
  .form-row {
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row label {
    display: block;
    margin-bottom: 2px;
  }
  .board-authority-row {
    display: flex;
    align-items: center;
    gap: 20px;       
    font-size: 16px;
    padding-left: 30px; 
    flex-wrap: wrap;
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  .table-row-contact {
    width: 100%;
    border-collapse: collapse;
    margin: 0;          
    table-layout: fixed;
  }
  
  .table-row-contact th,
  .table-row-contact td {
    text-align: left;
    padding: 2px 4px;   
    font-size: 12px;
    font-weight: normal; 
    border-left: 1px solid black;
    border-bottom: none;
    height: 100%;        
  }
  
  .table-row-contact th:first-child,
  .table-row-contact td:first-child {
    border-left: none;
  }
  
  .table-row-contact th:last-child,
  .table-row-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box;
    font-weight: normal; 
  }
  
  .table-input:focus {
    outline: none;
  }

  .table-mailing-email {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2px;   
  }
  
  .table-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; 
  }
  
 
  .table-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute;
    top: -2px;       
    bottom: 0;        
    right: 0;         
    width: 1px;
    background-color: black;
  }
  
  .table-input {
    width: 100%;
    border: none;
    box-sizing: border-box;
    font-weight: normal;
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; 
  }
  
  .value-table td:last-child {
    width: 50%; 
    text-align: left;
  }
  
  .line-input {
    border: none;
    border-bottom: 1px solid black;
    width: 260px; 
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px;
    font-size: 16px;
    line-height: 1.4;
    margin: 2px 0; 
  }
  
  
 

  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  .hearing-row {
    display: flex;
    width: 100%;
    box-sizing: border-box; 
    border-top: 1px solid transparent;
  }
  
  .hearing-left {
    flex: 0 0 75%;
    padding: 4px 0 4px 4px;
    border-right: 1px solid black; 
    box-sizing: border-box;
  }
  
  .hearing-right {
    flex: 1;             
    background-color: #f0f0f0;
    margin-right: -5px;    /* bleed into page-frame right padding */
    margin-bottom: -5px;   /* bleed into page-frame bottom padding */
    padding: 4px 9px 9px 4px; /* compensate for the negative margins to keep inner spacing */
    box-sizing: border-box;
    position: relative;
  }
  
  
  .arrow {
    font-size: 16px;
    line-height: 4;

  }
  
  .date-received {
    text-align: left;
  }

  .signer-initials-block {
    margin-top: 30px;
    padding: 10px;
    border: 1px dashed #333;
    background-color: #f9f9f9;
    width: fit-content;
  }
  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }
  

/* Lists */
ol {
  padding-left: 1.5rem;
}

ul {
  padding-left: 1.5rem;
}
  
  
```

- Adjusted `.hearing-right` so the gray area extends to the page frame’s right and bottom edges by using small negative margins and matching padding.

If you prefer not to use negative margins, we can:
- Decrease `padding` on `.page-frame` to 0 on the right/bottom and add inner padding to children.
- Wrap `.hearing-row` in a container that uses `overflow: hidden` and a full-width background.
- Use a pseudo-element on `.hearing-right` positioned to cover the bleed without affecting layout.

---

**User**

i want you to go through the index style files and fix the structure so that it was visually correct
well you got it

---

**Cursor**

I'll align `index.html` class names with the updated CSS so the layout renders correctly. I'll update row sections, header, instructions, notices, address, tables, and the hearing block.

I'll start by updating the row-1 structure in index.html, then proceed to header and subsequent sections to match the new CSS class names.

I’m going to scan both files to find any mismatched class names and missing styles, then update HTML/CSS to align, focusing on `.row-14-market-value-section`, tables, and header classes.

- All HTML class names are aligned with your updated CSS (`row-*` structure), including header, notices, instructions, tables, address, and the hearing section.
- The gray area in `row-16-hearing-right` now fills to the right/bottom edges.

Want me to also:
- Ensure separators align perfectly with rows and avoid gaps?
- Normalize vertical spacing between sections?
- Add print-friendly tweaks (page breaks, exact dimensions)?

---

**User**

Please help me clean up and beautify my HTML and CSS code. I mean i want clean structure with nested elements correctly aligned,  Sections clearly separated, Do not change functionality, only improve readability and structure

---

**Cursor**

I'll create a short todo list to track the cleanup, then format `index.html` and `style.css` for consistent indentation, add section comments, remove duplicates, and align nested elements. I'll begin by scanning `style.css` for duplicate/unused rules and then reformat both files.

I'll reformat `index.html`: normalize whitespace, align nested elements, add minimal section comments, and ensure tags are properly closed without changing content.

I'll scan `style.css` to identify duplicates and grouping opportunities, then format both files with clear section comments and consistent spacing while preserving behavior.

I’m going to clean up the structure and readability:
- Reformat `index.html` indentation and add clear section comments; align the `hearing-row-16` nesting.
- Tidy `style.css`: group sections, remove duplicate and unused rules, and add section comments.
I'll make these edits now and then confirm no functional changes.

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <div class="separator"></div>
      <!-- Row 2: Header with logos and title -->
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <div class="separator"></div>

      <!-- Row 3: Notice text and options -->
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <div class="separator"></div>

      <!-- Row 4: Instructions block -->
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <div class="separator"></div>
          <!-- Row 5: Property Identification heading -->
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <div class="separator"></div>

          <!-- Row 6: Property Identification table -->
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 7: Full address input -->
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <div class="separator"></div>
          <!-- Row 8: Applicant heading -->
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <div class="separator"></div>
          <!-- Row 10: Contact information heading -->
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <div class="separator"></div>
          <!-- Row 11: Contact information table -->
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 12: Mailing and email table -->
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
instructions for an explanation of market value.
          </div>
          <div class="separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          
        
          <div class="separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
  The signer of this application must initial this page if a two-sided application form is not used. 
  Signer’s initials: <input type="text" name="signerInitials" >
      </p>
    
  </form>

  <script src="script.js"></script>
</body>
</html>



```

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px;
  }
  
  .page-frame {
    position: relative;
    border: 1px solid black;
    padding: 5px;
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex;
    flex-direction: column;
    height: 45px;
  }
  
  .row-1-top {
    display: flex;
    justify-content: space-between;
  }
  
  .word-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute;
    left: 0;
    right: 0;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none;
    border-bottom: 2px solid black;
    font-size: 14px;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  .field-input:focus {
    outline: none;
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0;
  }
  
  .row-2-header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
    
  
  .header-logo {
    width: 20%;           
    max-width: 140px;
    height: auto;
  }
  
  .logo-right {
    width: 30%;     
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center;
    font-size: 24px;
    line-height: 1.3;
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px;
    line-height: 1;
    text-align: left;
    margin-top: 2px;
  }

  
  .row-3-notice-text {
    font-size: 20px;
    line-height: 1;
    margin-bottom: 5px; 
  }
  
  .row-3-notice-options label {
    display: inline-block; 
    margin-right: 20px;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px;
    line-height: 1;
    margin-top: 3px;

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0;
    table-layout: fixed;
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  
    padding: 4px;
    text-align: center;
    vertical-align: middle;
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap;
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; 
  }
  
  .form-input-inline {
    flex: 1;           
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box;
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block;
    margin-bottom: 2px;
  }

  .board-authority-row {
    display: flex;
    align-items: center;
    gap: 20px;       
    font-size: 16px;
    padding-left: 30px; 
    flex-wrap: wrap;
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse;
    margin: 0;          
    table-layout: fixed;
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; 
    border-bottom: none;
    height: 100%;       
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box;
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse;
    margin-top: 2px;  
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; 
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute;
    top: -2px;        
    bottom: 0;       
    right: 0;         
    width: 1px;
    background-color: black;
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    line-height: 1.5;
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; 
  }
  
  .value-table td:last-child {
    width: 50%; 
    text-align: left;
  }
  
  .line-input {
    border: none;
    border-bottom: 1px solid black;
    width: 260px; 
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px;
    font-size: 16px;
    line-height: 1.4;
    margin: 2px 0; 
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex;
    align-items: stretch;
    width: 100%;
    
    border-top: 1px solid transparent; 
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%;
    padding: 4px 0 4px 4px;
    position: relative; 
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              
    background-color: #f0f0f0;
    
    margin-right: -5px;   
    margin-bottom: -5px;  
    padding: 4px 9px 9px 4px;
    box-sizing: border-box;
    position: relative;
  }
  
  
  .arrow {
    font-size: 20px;
    line-height: 4;
    text-align: right;
    font-weight: bold;


  }
  .or-block{
    padding-left: 40%;
  }
  
  .date-received {
    text-align: left;
    padding: 5px;
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        
    border-bottom: 1px solid black;
    outline: none;       
    width: 80px;         
    font-size: 14px;     
  }
  
  

/* Lists */
ol {
  padding-left: 2.5rem;
}

ul {
  padding-left: 1.5rem;
}
  
  
```

- Reformatted `index.html` with clear section comments, consistent spacing, and proper nesting. Moved the `hearing-row-16` inside the `page-frame` container and kept the signer note outside the frame.
- Organized `style.css` by grouping rules per row section with concise comments, keeping behavior unchanged. Removed minor duplication and kept all selectors used in HTML.

Want me to:
- Add a compact print stylesheet (page breaks, margins)?
- Normalize font sizes/spacing tokens into CSS variables for easier tuning?

---

**User**

can you add comments in style
what does padding , display etc do
you don't need every line just where the first time attribute occurs

---

**Cursor**

I'll add concise inline comments to the first occurrence of key CSS properties in style.css (e.g., padding, display, position, flex, justify-content, align-items, border, margin, box-sizing, font-size, width/height, text-align, line-height, etc.) to explain their purpose without changing behavior.

```css
*** Begin Patch
*** Update File: [REDACTED_PATH]/project/style.css
@@
-body {
-    font-family: Arial, Helvetica, sans-serif;
-    margin: 20px;
-  }
+/* Base */
+body {
+    font-family: Arial, Helvetica, sans-serif; /* sets typeface stack */
+    margin: 20px; /* outer spacing around the whole page */
+  }
   
   .page-frame {
-    position: relative;
-    border: 1px solid black;
-    padding: 5px;
+    position: relative; /* enables absolutely positioned children relative to this box */
+    border: 1px solid black; /* draws the page frame outline */
+    padding: 5px; /* inner spacing between content and the frame */
   }
   
   
   /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
   .row-1 {
-    display: flex;
-    flex-direction: column;
-    height: 45px;
+    display: flex; /* turns children into a flex row/column */
+    flex-direction: column; /* stacks children vertically */
+    height: 45px; /* reserved vertical space for this row */
   }
   
   .row-1-top {
-    display: flex;
-    justify-content: space-between;
+    display: flex; /* horizontal layout for labels */
+    justify-content: space-between; /* spread labels across the row */
   }
   
   .word-block {
-    display: flex;
-    flex-direction: column;
-    align-items: flex-start;
+    display: flex; /* label + input stacked */
+    flex-direction: column; /* vertical stack */
+    align-items: flex-start; /* left-align content */
   }
@@
-  .separator {
-    position: absolute;
-    left: 0;
-    right: 0;
-    border-top: 1px solid black;
-  }
+  .separator {
+    position: absolute; /* draws a horizontal line overlay */
+    left: 0; /* anchor to left edge */
+    right: 0; /* anchor to right edge */
+    border-top: 1px solid black; /* the line itself */
+  }
@@
-  .field-input {
-    border: none;
-    border-bottom: 2px solid black;
-    font-size: 14px;
-    width: 100%;
-    padding: 0;
-    margin: 0;
-    box-sizing: border-box;
-  }
+  .field-input {
+    border: none; /* remove default input border */
+    border-bottom: 2px solid black; /* underline style for inputs */
+    font-size: 14px; /* text size inside input */
+    width: 100%; /* stretch to container width */
+    padding: 0; /* remove inner padding */
+    margin: 0; /* remove outer margin */
+    box-sizing: border-box; /* include border/padding in set width */
+  }
@@
-  .row-2-header {
-    padding: 5px 0;
+  .row-2-header {
+    padding: 5px 0; /* vertical spacing around header */
   }
@@
-  .row-2-header-top {
-    display: flex;
-    justify-content: space-between;
-    align-items: flex-start;
+  .row-2-header-top {
+    display: flex; /* lay out logos and title in a row */
+    justify-content: space-between; /* push logos to edges */
+    align-items: flex-start; /* align items at the top */
   }
@@
-  .header-logo {
-    width: 20%;           
-    max-width: 140px;
-    height: auto;
+  .header-logo {
+    width: 20%;           /* logo scales with container */
+    max-width: 140px;     /* cap the maximum width */
+    height: auto;         /* keep aspect ratio */
   }
@@
-  .logo-right {
-    width: 30%;     
-    max-width: 160px; 
+  .logo-right {
+    width: 30%;     /* right logo a bit wider */
+    max-width: 160px; 
   }
@@
-  .row-2-header-center-text {
-    text-align: center;
-    font-size: 24px;
-    line-height: 1.3;
+  .row-2-header-center-text {
+    text-align: center; /* center the title text */
+    font-size: 24px;    /* larger heading size */
+    line-height: 1.3;   /* comfortable line spacing */
   }
@@
-  .row-2-instructions-text {
-    font-size: 21px;
-    line-height: 1;
-    text-align: left;
-    margin-top: 2px;
+  .row-2-instructions-text {
+    font-size: 21px; /* prominent instruction size */
+    line-height: 1;  /* tight line height */
+    text-align: left; /* left-align paragraph */
+    margin-top: 2px; /* small spacing above */
   }
@@
-  .row-3-notice-text {
-    font-size: 20px;
-    line-height: 1;
-    margin-bottom: 5px; 
+  .row-3-notice-text {
+    font-size: 20px; /* body size for notice */
+    line-height: 1;  /* tight lines */
+    margin-bottom: 5px; /* spacing below paragraph */
   }
@@
-  .row-3-notice-options label {
-    display: inline-block; 
-    margin-right: 20px;
-    font-size: 20px;
-    line-height: 1;
-    cursor: pointer;
+  .row-3-notice-options label {
+    display: inline-block; /* allow horizontal flow with gaps */
+    margin-right: 20px;    /* space between options */
+    font-size: 20px;       /* readable option text */
+    line-height: 1;        /* compact lines */
+    cursor: pointer;       /* pointer for clickable labels */
   }
@@
-  .row-4-instructions-block {
-    font-size: 16px;
-    line-height: 1;
-    margin-top: 3px;
+  .row-4-instructions-block {
+    font-size: 16px; /* normal body size */
+    line-height: 1;  /* compact paragraphs */
+    margin-top: 3px; /* spacing from previous block */
 
   }
@@
-  .row-5 {
+  /* Row 5: Property Identification heading */
+  .row-5 {
     background-color: hwb(0 64% 35%);
-    padding: 4px 8px;
-    margin: 0 -5px; 
+    padding: 4px 8px; /* inner spacing in the strip */
+    margin: 0 -5px;  /* stretch background to frame edges */
   }
@@
-  .row-6-table {
+  /* Row 6: Property Identification table */
+  .row-6-table {
     width: 100%;
-    border-collapse: collapse;
-    margin-top: 0;
-    table-layout: fixed;
+    border-collapse: collapse; /* merge adjacent table borders */
+    margin-top: 0; /* flush with previous separator */
+    table-layout: fixed; /* equal column widths, faster layout */
   }
@@
-  .row-6-table th, .row-6-table td {
-    border-left: 1px solid black;  
-    padding: 4px;
-    text-align: center;
-    vertical-align: middle;
+  .row-6-table th, .row-6-table td {
+    border-left: 1px solid black;  /* vertical dividers */
+    padding: 4px;                  /* cell inner spacing */
+    text-align: center;            /* center column content */
+    vertical-align: middle;        /* vertically center content */
   }
@@
-  .row-6-table th {
-    font-size: 10px;
-    white-space: nowrap;
-    font-weight: normal; 
+  .row-6-table th {
+    font-size: 10px;     /* compact header text */
+    white-space: nowrap; /* prevent wrapping in headers */
+    font-weight: normal; /* avoid bold headers */
   }
@@
-  .row-7-full-address-input {
+  /* Row 7: Full address */
+  .row-7-full-address-input {
     border: none;
     outline: none;
     width: 100%;
     font-size: 14px;
 
   }
@@
-  .row-8 {
+  /* Row 8: Applicant heading */
+  .row-8 {
     background-color: hwb(0 64% 35%);
-    padding: 4px 8px;
-    margin: 0 -5px; 
+    padding: 4px 8px; /* inner spacing in the strip */
+    margin: 0 -5px;  /* stretch background to frame edges */
     font-size: 16px;        
   }
   .row-9-inline {
-    display: flex;
-    align-items: center;
-    gap: 8px; 
+    display: flex;           /* inline inputs and label */
+    align-items: center;     /* vertical centering */
+    gap: 8px;                /* space between items */
   }
   
   .form-input-inline {
-    flex: 1;           
-    border: none;
-    border-bottom: 1px solid black;
-    padding: 2px 4px;
-    font-size: 12px;
-    box-sizing: border-box;
+    flex: 1;                        /* grow to fill remaining space */
+    border: none;                   /* remove default border */
+    border-bottom: 1px solid black; /* underline style */
+    padding: 2px 4px;               /* comfortable click area */
+    font-size: 12px;                /* input text size */
+    box-sizing: border-box;         /* width includes padding */
   }
@@
-  .checkbox-row-9 label {
-    display: block;
-    margin-bottom: 2px;
+  .checkbox-row-9 label {
+    display: block; /* stack options vertically */
+    margin-bottom: 2px; /* small gap between options */
   }
@@
-  .board-authority-row {
-    display: flex;
-    align-items: center;
-    gap: 20px;       
-    font-size: 16px;
-    padding-left: 30px; 
-    flex-wrap: wrap;
+  .board-authority-row {
+    display: flex;        /* options in a flexible row */
+    align-items: center;  /* align along cross-axis */
+    gap: 20px;            /* spacing between options */
+    font-size: 16px;
+    padding-left: 30px;   /* indent the whole row */
+    flex-wrap: wrap;      /* wrap if not enough width */
   }
@@
-  .row-10{
+  /* Row 10: Contact information heading */
+  .row-10{
     background-color: hwb(0 64% 35%);
-    padding: 4px 8px;
-    margin: 0 -5px; 
+    padding: 4px 8px; /* inner spacing in the strip */
+    margin: 0 -5px;  /* stretch background to frame edges */
     font-size: 16px;  
     font-weight: bold;
   }
-  .table-row-11-contact {
+  /* Row 11: Contact information table */
+  .table-row-11-contact {
     width: 100%;
-    border-collapse: collapse;
-    margin: 0;          
-    table-layout: fixed;
+    border-collapse: collapse; /* collapse borders for grid look */
+    margin: 0;                 /* align to frame */
+    table-layout: fixed;       /* consistent column widths */
   }
   
   .table-row-11-contact th,
   .table-row-11-contact td {
-    text-align: left;
-    padding: 2px 4px;    
+    text-align: left;  /* left-align cell text */
+    padding: 2px 4px;  /* compact cell padding */
     font-size: 12px;
     font-weight: normal;  
-    border-left: 1px solid black; 
+    border-left: 1px solid black; /* vertical dividers */
     border-bottom: none;
-    height: 100%;       
+    height: 100%;       /* fill row height */
   }
@@
-  .table-input {
-    width: 100%;
-    border: none;
-    padding: 2px 0;
-    box-sizing: border-box;
-    font-weight: normal; 
-    color: black;
+  .table-input {
+    width: 100%;            /* full cell width */
+    border: none;           /* remove default border */
+    padding: 2px 0;         /* compact vertical padding */
+    box-sizing: border-box; /* include padding in width */
+    font-weight: normal; 
+    color: black;
   }
@@
-  .table-row-12-mailing-email {
+  /* Row 12: Mailing and email table */
+  .table-row-12-mailing-email {
     width: 100%;
-    border-collapse: collapse;
-    margin-top: 2px;  
+    border-collapse: collapse; /* collapse borders */
+    margin-top: 2px;           /* small spacing above */
   }
@@
-  .table-row-12-mailing-email td {
-    padding: 2px 4px;
-    vertical-align: top;
-    font-size: 12px;
-    position: relative; 
+  .table-row-12-mailing-email td {
+    padding: 2px 4px;     /* cell padding */
+    vertical-align: top;  /* align content to top */
+    font-size: 12px;      /* cell text size */
+    position: relative;   /* anchor pseudo divider */
   }
@@
-  .table-row-12-mailing-email td.with-vertical-line::after {
+  .table-row-12-mailing-email td.with-vertical-line::after {
     content: "";
-    position: absolute;
-    top: -2px;        
-    bottom: 0;       
-    right: 0;         
-    width: 1px;
-    background-color: black;
+    position: absolute; /* draw a vertical rule inside the cell */
+    top: -2px;        /* extend to the separator above */
+    bottom: 0;       /* run to the bottom of the cell */
+    right: 0;        /* position at the right edge */
+    width: 1px;      /* rule thickness */
+    background-color: black; /* rule color */
   }
@@
-  .row-13{
+  /* Row 13: Valuation claim heading */
+  .row-13{
     background-color: hwb(0 64% 35%);
-    padding: 4px 8px;
-    margin: 0 -5px; 
+    padding: 4px 8px; /* inner spacing in the strip */
+    margin: 0 -5px;  /* stretch background to frame edges */
     font-size: 16px;  
     font-weight: bold;
   }
@@
-  .value-table {
+  .value-table {
     width: 100%;
-    border-collapse: collapse;
-    font-size: 16px;
-    line-height: 1.5;
+    border-collapse: collapse; /* merge borders */
+    font-size: 16px;           /* readable cell text */
+    line-height: 1.5;          /* relaxed line spacing */
   }
@@
-  .line-input {
-    border: none;
-    border-bottom: 1px solid black;
-    width: 260px;  /* довжина лінії */
+  .line-input {
+    border: none;                   /* remove default border */
+    border-bottom: 1px solid black; /* underline style */
+    width: 260px;                   /* input visual width */
   }
@@
-  .note {
-    margin-top: 6px;
-    font-size: 16px;
-    line-height: 1.4;
-    margin: 2px 0; 
+  .note {
+    margin-top: 6px; /* spacing above note */
+    font-size: 16px; /* note text size */
+    line-height: 1.4; /* readable lines */
+    margin: 2px 0;   /* vertical margins */
   }
@@
-  .row-15{
+  /* Row 15: Hearing request heading */
+  .row-15{
     background-color: hwb(0 64% 35%);
-    padding: 4px 8px;
-    margin: 0 -5px; 
+    padding: 4px 8px; /* inner spacing in the strip */
+    margin: 0 -5px;  /* stretch background to frame edges */
     font-size: 16px;  
     font-weight: bold;
   }
-  /* Row 16: Hearing request block */
+  /* Row 16: Hearing request block */
   .hearing-row-16 {
-    display: flex;
-    align-items: stretch;
-    width: 100%;
+    display: flex;        /* left/right columns */
+    align-items: stretch; /* equal column heights */
+    width: 100%;          /* occupy full width */
     
-    border-top: 1px solid transparent; 
+    border-top: 1px solid transparent; /* keep background clean under separator */
   }
   
   .row-16-hearing-left {
-    flex: 0 0 75%;
-    padding: 4px 0 4px 4px;
-    position: relative; 
+    flex: 0 0 75%;        /* left column width */
+    padding: 4px 0 4px 4px; /* inner spacing */
+    position: relative;   /* for the right divider pseudo-element */
   }
   
   .row-16-hearing-left::after {
     content: '';
-    position: absolute;
-    top: 0;
-    right: 0;      
-    width: 1px;   
-    height: 100%;   
-    background-color: black;
+    position: absolute; /* draw a vertical divider */
+    top: 0;
+    right: 0;      
+    width: 1px;   
+    height: 100%;   
+    background-color: black;
   }
   
   
   .row-16-hearing-right {
-    flex: 1;              
-    background-color: #f0f0f0;
+    flex: 1;              /* take remaining width */
+    background-color: #f0f0f0; /* gray background area */
     
-    margin-right: -5px;   
-    margin-bottom: -5px;  
-    padding: 4px 9px 9px 4px;
-    box-sizing: border-box;
-    position: relative;
+    margin-right: -5px;   /* bleed to the page-frame border (right) */
+    margin-bottom: -5px;  /* bleed to the page-frame border (bottom) */
+    padding: 4px 9px 9px 4px; /* inner spacing incl. compensation */
+    box-sizing: border-box;   /* include padding in width */
+    position: relative;       /* context for inner elements */
   }
   
   
   .arrow {
-    font-size: 20px;
-    line-height: 4;
-    text-align: right;
-    font-weight: bold;
+    font-size: 20px;   /* arrow size */
+    line-height: 4;    /* move arrow vertically */
+    text-align: right; /* align arrow to the right edge */
+    font-weight: bold; /* heavier arrow */
 
 
   }
   .or-block{
-    padding-left: 40%;
+    padding-left: 40%; /* visually centers the OR between columns */
   }
   
   .date-received {
-    text-align: left;
-    padding: 5px;
-    font-weight: bold;
+    text-align: left; /* label alignment */
+    padding: 5px;     /* breathing room */
+    font-weight: bold;/* emphasize label */
 
   }
@@
-  input[name="signerInitials"] {
-    border: none;        
-    border-bottom: 1px solid black;
-    outline: none;       
-    width: 80px;         
-    font-size: 14px;     
+  input[name="signerInitials"] {
+    border: none;                     /* remove default border */
+    border-bottom: 1px solid black;   /* underline style */
+    outline: none;                    /* remove focus outline */
+    width: 80px;                      /* set input width */
+    font-size: 14px;                  /* input text size */
   }
@@
-/* Lists */
+/* Lists */
 ol {
-  padding-left: 2.5rem;
+  padding-left: 2.5rem; /* indent ordered lists */
 }
 
 ul {
-  padding-left: 1.5rem;
+  padding-left: 1.5rem; /* indent unordered lists */
 }
*** End Patch
```

```css
*** Begin Patch
*** Update File: [REDACTED_PATH]/project/style.css
@@
-/* Base */
-body {
-    font-family: Arial, Helvetica, sans-serif;
-    margin: 20px;
-  }
+/* Base */
+body {
+    font-family: Arial, Helvetica, sans-serif; /* sets the typeface */
+    margin: 20px; /* outer spacing around the page */
+  }
@@
-  .page-frame {
-    position: relative;
-    border: 1px solid black;
-    padding: 5px;
-  }
+  .page-frame {
+    position: relative; /* establishes a positioning context for absolutely positioned children */
+    border: 1px solid black; /* 1px solid outline around the form */
+    padding: 5px; /* inner spacing between content and the frame */
+  }
@@
-  .row-1 {
-    display: flex;
-    flex-direction: column;
-    height: 45px;
-  }
+  .row-1 {
+    display: flex; /* enables flex layout */
+    flex-direction: column; /* stack children vertically */
+    height: 45px; /* reserved vertical height for this row */
+  }
@@
-  .row-1-top {
-    display: flex;
-    justify-content: space-between;
-  }
+  .row-1-top {
+    display: flex; /* horizontal layout for labels */
+    justify-content: space-between; /* distribute items across the row */
+  }
@@
-  .row-1-bottom {
-    display: flex;
-    justify-content: space-between;
-    align-items: flex-end;
-  }
+  .row-1-bottom {
+    display: flex;
+    justify-content: space-between;
+    align-items: flex-end; /* align items along the cross-axis (baseline here) */
+  }
@@
-  .separator {
-    position: absolute;
-    left: 0;
-    right: 0;
-    border-top: 1px solid black;
-  }
+  .separator {
+    position: absolute; /* take out of normal flow to overlay a rule */
+    left: 0; right: 0; /* stretch horizontally across the frame */
+    border-top: 1px solid black; /* draw the horizontal separator line */
+  }
@@
-  .field-input {
-    border: none;
-    border-bottom: 2px solid black;
-    font-size: 14px;
-    width: 100%;
-    padding: 0;
-    margin: 0;
-    box-sizing: border-box;
-  }
+  .field-input {
+    border: none; /* remove default input border */
+    border-bottom: 2px solid black; /* underline style */
+    font-size: 14px; /* size of input text */
+    width: 100%; /* fill available width */
+    padding: 0;
+    margin: 0;
+    box-sizing: border-box; /* include padding/border in set width */
+  }
@@
-  .field-input:focus {
-    outline: none;
-  }
+  .field-input:focus {
+    outline: none; /* remove default focus ring; frame underline remains */
+  }
@@
-  .row-2-header {
-    padding: 5px 0;
-  }
+  .row-2-header {
+    padding: 5px 0;
+  }
@@
-  .row-2-header-top {
-    display: flex;
-    justify-content: space-between;
-    align-items: flex-start;
-  }
+  .row-2-header-top {
+    display: flex;
+    justify-content: space-between;
+    align-items: flex-start; /* align items to the top edge */
+  }
@@
-  .row-2-header-center-text {
-    text-align: center;
-    font-size: 24px;
-    line-height: 1.3;
-  }
+  .row-2-header-center-text {
+    text-align: center; /* horizontal text alignment */
+    font-size: 24px; /* larger heading text */
+    line-height: 1.3; /* vertical spacing between lines */
+  }
@@
-  .row-6-table {
-    width: 100%;
-    border-collapse: collapse;
-    margin-top: 0;
-    table-layout: fixed;
-  }
+  .row-6-table {
+    width: 100%;
+    border-collapse: collapse; /* merge adjacent table borders */
+    margin-top: 0;
+    table-layout: fixed; /* fixed column widths for consistent layout */
+  }
@@
-  .row-6-table th, .row-6-table td {
-    border-left: 1px solid black;  
-    padding: 4px;
-    text-align: center;
-    vertical-align: middle;
-  }
+  .row-6-table th, .row-6-table td {
+    border-left: 1px solid black;  
+    padding: 4px; /* inner spacing inside cells */
+    text-align: center; /* horizontal alignment for cell content */
+    vertical-align: middle; /* vertical alignment for cell content */
+  }
@@
-  .row-6-table th {
-    font-size: 10px;
-    white-space: nowrap;
-    font-weight: normal; 
-  }
+  .row-6-table th {
+    font-size: 10px;
+    white-space: nowrap; /* prevent header text from wrapping */
+    font-weight: normal; 
+  }
@@
-  .row-9-inline {
-    display: flex;
-    align-items: center;
-    gap: 8px; 
-  }
+  .row-9-inline {
+    display: flex;
+    align-items: center;
+    gap: 8px; /* space between inline elements */
+  }
@@
-  .row-3-notice-options label {
-    display: inline-block; 
-    margin-right: 20px;
-    font-size: 20px;
-    line-height: 1;
-    cursor: pointer;
-  }
+  .row-3-notice-options label {
+    display: inline-block; 
+    margin-right: 20px;
+    font-size: 20px;
+    line-height: 1;
+    cursor: pointer; /* indicates label is clickable */
+  }
@@
-  .row-5 {
-    background-color: hwb(0 64% 35%);
-    padding: 4px 8px;
-    margin: 0 -5px; 
-  }
+  .row-5 {
+    background-color: hwb(0 64% 35%); /* section highlight background */
+    padding: 4px 8px;
+    margin: 0 -5px; 
+  }
*** End Patch
```

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; /* текст */
  }
  
  .value-table td:last-child {
    width: 50%; /* поле для вводу */
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}
  
  
```

Added concise inline comments in style.css at the first occurrence of key properties to explain their purpose:
- position, border, padding, margin
- display, flex-direction, justify-content, align-items
- width, max-width, height, box-sizing
- font-size, line-height, text-align
- table-specific rules (border-collapse, table-layout)
- pseudo-element use for vertical rules

If you want comments for any other specific properties, tell me which ones.

---

**User**

Is my option with <div class="separator"></div> separation modern and optimal?

---

**Cursor**

Short answer: it works, but there are more modern, cleaner options.

Recommendations:
- Use section borders instead of extra DOM: add border-top to section containers (e.g., .row-X + .row-X) and control spacing with margin/padding.
- Prefer pseudo-elements over empty divs: .page-frame::before or .row::before with position: absolute for lines, keeping HTML cleaner.
- Use <hr> when the line is a true thematic break: it’s semantic and accessible; style it with CSS.
- For layout gaps, use gap with flex/grid instead of spacer elements.
- For full-bleed lines inside padded frames, keep the container position: relative and use a pseudo-element stretched left/right, or apply background linear-gradient to the container.
- Reduce DOM weight: extra divs add nodes; borders/pseudo-elements don’t.

If you want, I can replace your current .separator divs with borders or pseudo-elements while preserving the exact visuals.

---

**User**

yes i want

---

**Cursor**

I'll replace the separator divs by adding a reusable CSS utility `.with-separator` using a pseudo-element, then remove each `<div class="separator"></div>` and add `with-separator` to the following section elements for the same visual result.

I'll add the CSS utility first, then refactor index.html to remove the separator divs and apply the new class to the correct sections.

```css
*** Begin Patch
*** Update File: [REDACTED_PATH]/project/style.css
@@
   .separator {
     position: absolute;
     left: 0;
     right: 0;
     border-top: 1px solid black;
   }
+
+  /* Utility: add a horizontal separator line above an element without extra markup */
+  .with-separator {
+    position: relative;
+  }
+  .with-separator::before {
+    content: "";
+    position: absolute;
+    left: 0;
+    right: 0;
+    top: -1px; /* align to the previous section bottom edge */
+    border-top: 1px solid black;
+  }
*** End Patch
```

```css
*** Begin Patch
*** Update File: [REDACTED_PATH]/project/style.css
@@
   .page-frame {
     position: relative;
     border: 1px solid black;
     padding: 5px;
   }
+  
+  /* Utility: add a separator line above an element */
+  .with-separator {
+    position: relative;
+  }
+  .with-separator::before {
+    content: "";
+    position: absolute;
+    left: 0;
+    right: 0;
+    top: -1px;
+    border-top: 1px solid black;
+  }
*** End Patch
```

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  
  /* Utility: add a horizontal separator without extra markup */
  .with-separator {
    position: relative;
  }
  .with-separator::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -1px;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; /* текст */
  }
  
  .value-table td:last-child {
    width: 50%; /* поле для вводу */
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}

/* FRAME 2 (4page document) */
.row-17{
  background-color: hwb(0 64% 35%);
  padding: 4px 8px;
  margin: 0 -5px; 
  font-size: 16px;  
  font-weight: bold;
}

.page-frame-2{
border: 1px solid black;
position: relative; /* context for absolutely positioned children */
padding: 5px; /* inner spacing from the frame edge */
}


  
  
```

```html
*** Begin Patch
*** Update File: /[REDACTED_PATH]/project/index.html
@@
-      <div class="separator"></div>
-      <!-- Row 2: Header with logos and title -->
+      <!-- Row 2: Header with logos and title -->
+      <div class="with-separator"></div>
       <div class="row-2-header">
@@
-      <div class="separator"></div>
-
-      <!-- Row 3: Notice text and options -->
+      <!-- Row 3: Notice text and options -->
+      <div class="with-separator"></div>
       <p class="row-3-notice-text">
@@
-      <div class="separator"></div>
-
-      <!-- Row 4: Instructions block -->
+      <!-- Row 4: Instructions block -->
+      <div class="with-separator"></div>
       <div class="row-4-instructions-block">
@@
-          <div class="separator"></div>
-          <!-- Row 5: Property Identification heading -->
+          <!-- Row 5: Property Identification heading -->
+          <div class="with-separator"></div>
           <div class="row-5">
@@
-          <div class="separator"></div>
-
-          <!-- Row 6: Property Identification table -->
+          <!-- Row 6: Property Identification table -->
+          <div class="with-separator"></div>
           <table class="row-6-table">
@@
-          <div class="separator"></div>
-          <!-- Row 7: Full address input -->
+          <!-- Row 7: Full address input -->
+          <div class="with-separator"></div>
           <div class="row-7-full-address">
@@
-          <div class="separator"></div>
-          <!-- Row 8: Applicant heading -->
+          <!-- Row 8: Applicant heading -->
+          <div class="with-separator"></div>
           <div class="row-8">
@@
-          <div class="separator"></div>
-          <!-- Row 10: Contact information heading -->
+          <!-- Row 10: Contact information heading -->
+          <div class="with-separator"></div>
           <div class="row-10">
@@
-          <div class="separator"></div>
-          <!-- Row 11: Contact information table -->
+          <!-- Row 11: Contact information table -->
+          <div class="with-separator"></div>
           <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
@@
-          <div class="separator"></div>
-          <!-- Row 12: Mailing and email table -->
+          <!-- Row 12: Mailing and email table -->
+          <div class="with-separator"></div>
           <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
@@
-          <div class="separator"></div>
-          <!-- Row 13: Valuation claim heading -->
+          <!-- Row 13: Valuation claim heading -->
+          <div class="with-separator"></div>
           <div class="row-13">
@@
-          <div class="separator"></div>
-          <!-- Row 14: Market value section -->
+          <!-- Row 14: Market value section -->
+          <div class="with-separator"></div>
           <div class="row-14-market-value-section">
@@
-          <div class="separator"></div>
-          <!-- Row 15: Hearing request heading -->
+          <!-- Row 15: Hearing request heading -->
+          <div class="with-separator"></div>
           <div class="row-15">
@@
-          <div class="separator"></div>
-          <!-- Row 16: Hearing request options and date received -->
+          <!-- Row 16: Hearing request options and date received -->
+          <div class="with-separator"></div>
           <div class="hearing-row-16">
@@
-        <div class="separator"></div>
+        <div class="with-separator"></div>
         <!-- Row 5: Property Identification heading -->
         <div class="row-5">
*** End Patch
```

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <!-- Row 2: Header with logos and title -->
      <div class="with-separator"></div>
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <!-- Row 3: Notice text and options -->
      <div class="with-separator"></div>
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <!-- Row 4: Instructions block -->
      <div class="with-separator"></div>
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <div class="separator"></div>
          <!-- Row 5: Property Identification heading -->
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <div class="separator"></div>

          <!-- Row 6: Property Identification table -->
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 7: Full address input -->
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <div class="separator"></div>
          <!-- Row 8: Applicant heading -->
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <div class="separator"></div>
          <!-- Row 10: Contact information heading -->
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <div class="separator"></div>
          <!-- Row 11: Contact information table -->
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 12: Mailing and email table -->
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
            The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
            instructions for an explanation of market value.
          </div>
          <div class="separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          
        
          <div class="separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
        The signer of this application must initial this page if a two-sided application form is not used. 
        Signer’s initials: <input type="text" name="signerInitials" >
      </p>
      <div class="page-frame-2">
        <div class="row-17">
          6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025 – Complete every item. Note: The Tax Commission cannot change
          the physical description of your property that appears on your Notice of Property Value. See Instructions.
        </div>
        <div class="separator"></div>
      </div>      
  

  </form>

  <script src="script.js"></script>
</body>
</html>



```

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <!-- Row 2: Header with logos and title -->
      <div class="with-separator"></div>
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <!-- Row 3: Notice text and options -->
      <div class="with-separator"></div>
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <!-- Row 4: Instructions block -->
      <div class="with-separator"></div>
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <!-- Row 5: Property Identification heading -->
          <div class="with-separator"></div>
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <!-- Row 6: Property Identification table -->
          <div class="with-separator"></div>
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 7: Full address input -->
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <div class="separator"></div>
          <!-- Row 8: Applicant heading -->
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <div class="separator"></div>
          <!-- Row 10: Contact information heading -->
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <div class="separator"></div>
          <!-- Row 11: Contact information table -->
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 12: Mailing and email table -->
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
            The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
            instructions for an explanation of market value.
          </div>
          <div class="separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          
        
          <div class="separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
        The signer of this application must initial this page if a two-sided application form is not used. 
        Signer’s initials: <input type="text" name="signerInitials" >
      </p>
      <div class="page-frame-2">
        <div class="row-17">
          6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025 – Complete every item. Note: The Tax Commission cannot change
          the physical description of your property that appears on your Notice of Property Value. See Instructions.
        </div>
        <div class="separator"></div>
      </div>      
  

  </form>

  <script src="script.js"></script>
</body>
</html>



```

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <!-- Row 2: Header with logos and title -->
      <div class="with-separator"></div>
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <!-- Row 3: Notice text and options -->
      <div class="with-separator"></div>
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <!-- Row 4: Instructions block -->
      <div class="with-separator"></div>
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <!-- Row 5: Property Identification heading -->
          <div class="with-separator"></div>
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <!-- Row 6: Property Identification table -->
          <div class="with-separator"></div>
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <!-- Row 7: Full address input -->
          <div class="with-separator"></div>
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <!-- Row 8: Applicant heading -->
          <div class="with-separator"></div>
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <div class="separator"></div>
          <!-- Row 10: Contact information heading -->
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <div class="separator"></div>
          <!-- Row 11: Contact information table -->
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <div class="separator"></div>
          <!-- Row 12: Mailing and email table -->
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
            The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
            instructions for an explanation of market value.
          </div>
          <div class="separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          
        
          <div class="separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
        The signer of this application must initial this page if a two-sided application form is not used. 
        Signer’s initials: <input type="text" name="signerInitials" >
      </p>
      <div class="page-frame-2">
        <div class="row-17">
          6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025 – Complete every item. Note: The Tax Commission cannot change
          the physical description of your property that appears on your Notice of Property Value. See Instructions.
        </div>
        <div class="separator"></div>
      </div>      
  

  </form>

  <script src="script.js"></script>
</body>
</html>



```

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <!-- Row 2: Header with logos and title -->
      <div class="with-separator"></div>
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <!-- Row 3: Notice text and options -->
      <div class="with-separator"></div>
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <!-- Row 4: Instructions block -->
      <div class="with-separator"></div>
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <!-- Row 5: Property Identification heading -->
          <div class="with-separator"></div>
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <!-- Row 6: Property Identification table -->
          <div class="with-separator"></div>
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <!-- Row 7: Full address input -->
          <div class="with-separator"></div>
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <!-- Row 8: Applicant heading -->
          <div class="with-separator"></div>
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <!-- Row 10: Contact information heading -->
          <div class="with-separator"></div>
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <!-- Row 11: Contact information table -->
          <div class="with-separator"></div>
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <!-- Row 12: Mailing and email table -->
          <div class="with-separator"></div>
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
            The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
            instructions for an explanation of market value.
          </div>
          <div class="separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          
        
          <div class="separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
        The signer of this application must initial this page if a two-sided application form is not used. 
        Signer’s initials: <input type="text" name="signerInitials" >
      </p>
      <div class="page-frame-2">
        <div class="row-17">
          6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025 – Complete every item. Note: The Tax Commission cannot change
          the physical description of your property that appears on your Notice of Property Value. See Instructions.
        </div>
        <div class="separator"></div>
      </div>      
  

  </form>

  <script src="script.js"></script>
</body>
</html>



```

```html
*** Begin Patch
*** Update File: /[REDACTED_PATH]/project/index.html
@@
-          </table>
-          <div class="with-separator"></div>
-          <!-- Row 13: Valuation claim heading -->
+          </table>
+          <!-- Row 13: Valuation claim heading -->
+          <div class="with-separator"></div>
           <div class="row-13">
@@
-          </div>
-          <div class="separator"></div>
-          <!-- Row 14: Market value section -->
+          </div>
+          <!-- Row 14: Market value section -->
+          <div class="with-separator"></div>
           <div class="row-14-market-value-section">
@@
-          </div>
-          
-        
-          <div class="separator"></div>
-          <!-- Row 15: Hearing request heading -->
+          </div>
+          <!-- Row 15: Hearing request heading -->
+          <div class="with-separator"></div>
           <div class="row-15">
@@
-          </div>
-          <div class="separator"></div>
-          <!-- Row 16: Hearing request options and date received -->
+          </div>
+          <!-- Row 16: Hearing request options and date received -->
+          <div class="with-separator"></div>
           <div class="hearing-row-16">
*** End Patch
```

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <!-- Row 2: Header with logos and title -->
      <div class="with-separator"></div>
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <!-- Row 3: Notice text and options -->
      <div class="with-separator"></div>
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <!-- Row 4: Instructions block -->
      <div class="with-separator"></div>
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <!-- Row 5: Property Identification heading -->
          <div class="with-separator"></div>
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <!-- Row 6: Property Identification table -->
          <div class="with-separator"></div>
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <!-- Row 7: Full address input -->
          <div class="with-separator"></div>
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <!-- Row 8: Applicant heading -->
          <div class="with-separator"></div>
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <!-- Row 10: Contact information heading -->
          <div class="with-separator"></div>
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <!-- Row 11: Contact information table -->
          <div class="with-separator"></div>
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <!-- Row 12: Mailing and email table -->
          <div class="with-separator"></div>
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="with-separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
            The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
            instructions for an explanation of market value.
          </div>
          <div class="with-separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          <div class="with-separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="with-separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
        The signer of this application must initial this page if a two-sided application form is not used. 
        Signer’s initials: <input type="text" name="signerInitials" >
      </p>
      <div class="page-frame-2">
        <div class="row-17">
          6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025 – Complete every item. Note: The Tax Commission cannot change
          the physical description of your property that appears on your Notice of Property Value. See Instructions.
        </div>
        <div class="separator"></div>
      </div>      
  

  </form>

  <script src="script.js"></script>
</body>
</html>



```

- Replaced many `<div class="separator"></div>` with a CSS-based separator: added `.with-separator` (pseudo-element) and inserted `<div class="with-separator"></div>` before each section. No visual change; cleaner DOM.

Want me to:
- Remove the old `.separator` style and remaining separator divs (e.g., in `page-frame-2`)?
- Instead of placeholder divs, apply `.with-separator` directly on the following section containers to eliminate spacer nodes entirely?

---

**User**

now these dividing lines do not reach the edge of the main frame

---

**Cursor**

I'll adjust the CSS for the pseudo-element so separator lines bleed into the `page-frame` and `page-frame-2` padding by extending left and right by 5px, matching the frame padding.

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  
  /* Utility: add a horizontal separator without extra markup */
  .with-separator {
    position: relative;
  }
  .with-separator::before {
    content: "";
    position: absolute;
    /* extend into the frame padding so the line reaches the border */
    left: -5px;
    right: -5px;
    top: -1px;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; 
  }
  
  .value-table td:last-child {
    width: 50%;
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}

/* FRAME 2 (4page document) */
.row-17{
  background-color: hwb(0 64% 35%);
  padding: 4px 8px;
  margin: 0 -5px; 
  font-size: 16px;  
  font-weight: bold;
}

.page-frame-2{
border: 1px solid black;
position: relative; /* context for absolutely positioned children */
padding: 5px; /* inner spacing from the frame edge */
}


  
  
```

- Updated `.with-separator::before` to extend left/right by 5px so lines reach the frame borders, matching the frame padding.

If the frame padding changes later, we can set these to use CSS variables for automatic alignment.

---

**User**

in index I added a table or is it optimal that I chose the table itself and not through div
and if so then add the style so that it matches the previous tables

---

**Cursor**

I'll scan index.html to find the newly added table and determine which styles it should match.

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  
  /* Utility: add a horizontal separator without extra markup */
  .with-separator {
    position: relative;
  }
  .with-separator::before {
    content: "";
    position: absolute;
    /* extend into the frame padding so the line reaches the border */
    left: -5px;
    right: -5px;
    top: -1px;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; 
  }
  
  .value-table td:last-child {
    width: 50%; 
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}

  /* Row 18: Property Description table (Page 4) */
  .row-18-property-description {
    width: 100%;
    border-collapse: collapse; /* merge borders for grid look */
    table-layout: fixed; /* consistent column widths */
  }
  .row-18-property-description th,
  .row-18-property-description td {
    border-left: 1px solid black; /* vertical dividers */
    padding: 4px; /* compact cell padding */
    font-size: 12px; /* readable size */
    vertical-align: middle; /* align inputs nicely */
    text-align: left; /* left-align labels/content */
  }
  .row-18-property-description th:first-child,
  .row-18-property-description td:first-child {
    border-left: none; /* no extra line on the left edge */
  }
  .row-18-property-description th:last-child,
  .row-18-property-description td:last-child {
    border-right: none; /* let the page frame be the right edge */
  }
/* FRAME 2 (4page document) */
.row-17{
  background-color: hwb(0 64% 35%);
  padding: 4px 8px;
  margin: 0 -5px; 
  font-size: 16px;  
  font-weight: bold;
}

.page-frame-2{
border: 1px solid black;
position: relative; /* context for absolutely positioned children */
padding: 5px; /* inner spacing from the frame edge */
}




  
  
```

```html

<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TC108 Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form id="tc108-form">
    <div class="page-frame">
      <!-- Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY -->
      <div class="row-1">
        <div class="row-1-top">
          <div class="word-block"><span>YEAR</span></div>
          <div class="word-block"><span>BOROUGH</span></div>
          <div class="word-block"><span>BLOCK</span></div>
          <div class="word-block"><span>LOT</span></div>
          <div class="word-block"><span>GROUP #</span></div>
          <div class="word-block"><span>REVIEWED BY</span></div>
        </div>

        <div class="row-1-bottom">
          <div class="word-block"><span class="field-bold">2025/26</span></div>

          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:6ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:5ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:7ch;" placeholder="">
          </div>
          <div class="word-block">
            <input type="text" class="field-input" style="width:12ch;" placeholder="">
          </div>
        </div>
      </div>

      <!-- Row 2: Header with logos and title -->
      <div class="with-separator"></div>
      <div class="row-2-header">
        <div class="row-2-header-top">
          <img src="logo1.png" alt="Left Logo" class="header-logo logo-left">

          <div class="row-2-header-center-text">
            <div class="line-group">
              <strong>TAX COMMISSION OF THE CITY OF NEW YORK</strong><br>
              <strong>1 Centre Street, Room 2400, New York, NY 10007</strong>
            </div>

            <div class="line-group">
              <strong>APPLICATION FOR CORRECTION OF ASSESSED VALUE FOR ONE,</strong><br>
              <strong>TWO OR THREE-FAMILY HOUSE OR OTHER CLASS ONE PROPERTY <u>ONLY</u></strong>
            </div>
          </div>

          <img src="logo2.png" alt="Right Logo" class="header-logo logo-right">
        </div>
      </div>


      <!-- Row 2: Filing instruction note -->
      <p class="row-2-instructions-text">
        <strong>YOUR COMPLETED FORM TC108 <u>MUST BE RECEIVED</u> BY THE NYC TAX COMMISSION AT 1 CENTRE ST., RM. 2400, NEW YORK, NY 10007 BY 5:00 P.M. MARCH 17, 2025. See Instructions “Filing TC108”.</strong>
      </p>
      <!-- Row 3: Notice text and options -->
      <div class="with-separator"></div>
      <p class="row-3-notice-text">
          However, if you received a Revised Notice of Property Value <strong>increasing</strong> your assessed value</strong> 
          or a notice of apportionment from the Dept. of Finance dated after February 1, 2025, 
          you have 20 calendar days after the date of the notice to file Form TC108. 
          Check the box next to the type of notice you received and attach a copy of the notice:
      </p>
      <div class="row-3-notice-options">
          <label><input type="checkbox" name="notice_type" value="apportionment"> Apportionment notice</label>
          <label><input type="checkbox" name="notice_type" value="increased_assessment"> Notice of increased assessment</label>
      </div>
      <!-- Row 4: Instructions block -->
      <div class="with-separator"></div>
      <div class="row-4-instructions-block">
            <p><strong>YOU CANNOT USE THIS FORM TO:</strong> (i) request a change in the estimated market value, physical description
            or building class of your property; (ii) apply for a reduction in the assessed value of a class 2, 3 or 4 property;
            (iii) request a change in tax class; or (iv) claim an exemption.</p>
          
            <p>READ TC600 AND ALL INSTRUCTIONS BEFORE COMPLETING THIS FORM. TYPE OR PRINT IN INK. DO NOT USE PENCIL.
            COMPLETE ALL PARTS 1 THROUGH 10. Go to www.nyc.gov/html/taxcomm for forms and instructions.</p>
            <p><strong><u>NEW: NONRESIDENTIAL RENTAL ACTIVITY MUST BE REPORTED ON TC201 OR TC201. See Part 7 below.</u></strong></p>
          
            <p><strong>NOTE:</strong> A $175 FEE applies to applications if the 2025/26 <u>assessed value</u> is $2 million or more.
            Do NOT pay the application; it will be included in your property tax bill. See TC600 for more information about the fee. 
            </p>
          </div>
          <!-- Row 5: Property Identification heading -->
          <div class="with-separator"></div>
          <div class="row-5">
            <strong>1. PROPERTY IDENTIFICATION - A separate application is required for each tax lot, except for condo units.</strong>
          </div>

          <!-- Row 6: Property Identification table -->
          <div class="with-separator"></div>
          <table class="row-6-table">
            <tr>
              <th>BOROUGH (Bronx, Brooklyn, Manhattan, Queens or Staten Island)</th>
              <th>BLOCK</th>
              <th>LOT</th>
              <th>ASSESSMENT YEAR</th>
            </tr>
            <tr>
                <td><input type="text" name="borough"></td>
                <td><input type="text" name="block"></td>
                <td><input type="text" name="lot"></td>
              <td class="field-bold">2025/26</td>
            </tr>
            
          </table>
          <!-- Row 7: Full address input -->
          <div class="with-separator"></div>
          <div class="row-7-full-address">
            <div class="row-7-full-address-label">
              FULL ADDRESS OF PROPERTY (INCLUDING ZIP CODE)
            </div>
            <input type="text" name="fullAddress" class="row-7-full-address-input">
          </div>
          <!-- Row 8: Applicant heading -->
          <div class="with-separator"></div>
          <div class="row-8">
            <strong>2. APPLICANT - The Applicant must be an owner or other person directly affected by the assessment.
            An attorney or agent, other than the board of managers of a condo, cannot be the Applicant.</strong>
          </div>
          <div class="separator"></div>

          <!-- Row 9: Applicant name -->
          <div class="form-row row-9-inline">
            <strong>a) APPLICANT’S NAME:</strong>
            <input type="text" name="applicantName" class="form-input-inline">
          </div>
          
          <!-- Row 9: Applicant description label -->
          <div class="form-row">
            <strong>b) APPLICANT DESCRIPTION (CHECK ONE):</strong>
          </div>
          
          <!-- Row 9: Applicant description options -->
          <div class="checkbox-row-9">
            <label><input type="checkbox" name="description" value="Owner"> Owner</label>
            <label><input type="checkbox" name="description" value="Tenant"> Tenant paying all taxes</label>
            <label>
              <input type="checkbox" name="description" value="Other"> Other (specify):
              <input type="text" name="descriptionOther" class="form-input-inline">
              (<strong>Attach TC200</strong> and documentation specified in Part 2 of TC200.)
            </label>
            
            <p><strong>IF YOU DON'T SUBMIT FORM TC200, YOUR APPLICATION WILL NOT BE REVIEWED.</strong></p>
            <label>
              <input type="checkbox" name="description" value="CondoBoard"> Condo board of managers designated as agent for condo unit owner to contest assessment (Attach list of covered lots).
            </label>
          </div>
          
          <!-- Row 9: Source of Board’s authority -->
          <div class="form-row board-authority-row">
            <span>Source of Board’s authority (check one):</span>
            <label><input type="checkbox" name="boardAuthority" value="ByLaws"> By-laws</label>
            <label><input type="checkbox" name="boardAuthority" value="Individual"> Individual authorization, valid under applicable law</label>
            <label><input type="checkbox" name="boardAuthority" value="POA"> Power-of-Attorney</label>
          </div>

          <!-- Row 10: Contact information heading -->
          <div class="with-separator"></div>
          <div class="row-10">
            3. CONTACT INFORMATION - Supply information for Representative or Applicant, if self-represented. (See Instr.)
          </div>
          <!-- Row 11: Contact information table -->
          <div class="with-separator"></div>
          <table class="table-row-11-contact" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:70%">
              <col style="width:15%">
              <col style="width:15%">
            </colgroup>
            
            <tr>
              <th>NAME OF INDIVIDUAL OR FIRM TO BE CONTACTED</th>
              <th>GROUP #, IF ANY</th>
              <th>PHONE NO.</th>
            </tr>
            <tr>
              <td><input type="text" name="contactName" class="table-input"></td>
              <td><input type="text" name="contactGroup" class="table-input"></td>
              <td><input type="text" id="contactPhone" name="contactPhone" class="table-input" placeholder="(____)____ --- ________" maxlength="14"></td>
            </tr>
            
          </table>
          <!-- Row 12: Mailing and email table -->
          <div class="with-separator"></div>
          <table class="table-row-12-mailing-email" cellspacing="0" cellpadding="0">
            <colgroup>
              <col style="width:65%">
              <col style="width:35%">
            </colgroup>
            <tr>
                <td class="with-vertical-line">
                  MAILING ADDRESS:
                  <input type="text" name="mailingAddress" class="table-input">
                </td>
                <td>
                  EMAIL ADDRESS:
                  <input type="text" name="emailAddress" class="table-input">
                </td>
              </tr>
          </table>
          <div class="with-separator"></div>
          <!-- Row 13: Valuation claim heading -->
          <div class="row-13">
            4. VALUATION CLAIM - IF YOU DO NOT FULLY COMPLETE THIS PART 4, YOUR APPLICATION WILL BE DISMISSED.
            The Tax Commission cannot change the estimate of market value shown on your Notice of Property Value. See
            instructions for an explanation of market value.
          </div>
          <div class="with-separator"></div>
          <!-- Row 14: Market value section -->
          <div class="row-14-market-value-section">
            <table class="value-table">
              <tr>
                <td>a) Applicant's estimate of market value (what the property would sell for in the current market):</td>
                <td>a)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>b) Multiply line a by 6% (.06)</td>
                <td>b)$ <input type="text" class="line-input"></td>
              </tr>
              <tr>
                <td>c) Assessed Value (from Notice of Property Value)</td>
                <td>c)$ <input type="text" class="line-input"></td>
              </tr>
            </table>
          
            <p class="note">
                <strong>If line c is less than line b, DO NOT FILE TC108.</strong><br>
              You have the right to allege an assessment ratio lower than the 6% ratio used in setting the assessment and seek a lower assessment in a
              proceeding for judicial review. See TC600 available at:
              <a href="https://www.nyc.gov/html/taxcomm" target="_blank">www.nyc.gov/html/taxcomm</a>.
            </p>
          </div>
          <div class="with-separator"></div>
          <!-- Row 15: Hearing request heading -->
          <div class="row-15">
            5. HEARING REQUEST - Check <u>one</u> box only.
          </div>
          <div class="with-separator"></div>
          <!-- Row 16: Hearing request options and date received -->
          <div class="hearing-row-16">
            <div class="row-16-hearing-left">
              <label><input type="checkbox"> Review on papers submitted WITHOUT an in-person hearing</label>
              <div class="or-block"><strong>OR</strong></div>
              <label><input type="checkbox"> In-person hearing in Manhattan</label><br>
              <label><input type="checkbox"> Telephone hearing</label><br>
              <label><input type="checkbox"> Video conference using Microsoft Teams</label><br>
            </div>
            <div class="row-16-hearing-right">
              <div class="arrow">←</div>
              <div class="date-received">DATE RECEIVED</div>
            </div>
          </div>
        </div>
      </div>
      <!-- Signer initials outside the frame -->
      <p>
        The signer of this application must initial this page if a two-sided application form is not used. 
        Signer’s initials: <input type="text" name="signerInitials" >
      </p>

      <!-- PAGE 4-->
      <div class="page-frame-2">
        <div class="row-17">
          6. PROPERTY DESCRIPTION AS OF JANUARY 5, 2025 – Complete every item. Note: The Tax Commission cannot change
          the physical description of your property that appears on your Notice of Property Value. See Instructions.
        </div>
        <div class="with-separator"></div>
      <table class="row-18-property-description" cellspacing="0" cellpadding="0">
        <!-- Row 1 -->
        <tr>
          <th>NUMBER OF KITCHENS</th>
          <th>NUMBER OF BATHS</th>
          <th>NUMBER OF BEDROOMS</th>
          <th>NUMBER OF OTHER ROOMS</th>
        </tr>
        <tr>
          <td><input type="text" class="line-input"></td>
          <td><input type="text" class="line-input"></td>
          <td><input type="text" class="line-input"></td>
          <td><input type="text" class="line-input"></td>
        </tr>

        <!-- Row 2 -->
        <tr>
          <th>NUMBER OF STORIES (ABOVE BASEMENT)</th>
          <th>YEAR OF CONSTRUCTION (IF KNOWN)</th>
          <th colspan="2">NUMBER OF PARKING SPACES ON THE PROPERTY
            <br>Indoor (garage): <input type="text" class="line-input" style="width:50px;">
            Outdoor: <input type="text" class="line-input" style="width:50px;">
          </th>
        </tr>
        <tr>
          <td><input type="text" class="line-input"></td>
          <td><input type="text" class="line-input"></td>
          <td colspan="2"></td>
        </tr>

        <!-- Row 3 -->
        <tr>
          <th colspan="4">YEAR AND DESCRIPTION OF LAST PHYSICAL ALTERATION OR ADDITION SINCE APPLICANT ACQUIRED THE PROPERTY</th>
        </tr>
        <tr>
          <td colspan="4"><input type="text" class="line-input" style="width:100%;"></td>
        </tr>
      </table>
      <div class="with-separator"></div>


      </div>      
  

  </form>

  <script src="script.js"></script>
</body>
</html>



```

- Using a table for the property description is appropriate here; it matches your other structured grids.
- I added styles for `row-18-property-description` to align with previous tables and swapped its separators to the `.with-separator` approach.

Want me to:
- Mirror header font sizes/weight in the new table to match `row-6-table` headings exactly?
- Add a `colgroup` to control exact column widths like earlier tables?

---

**User**

Underlining where data should be entered is not necessary in this table row-18-property-description

---

**Cursor**

I'll update the styles so inputs inside `row-18-property-description` have no underline by overriding the `.line-input` border within that table.

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  
  /* Utility: add a horizontal separator without extra markup */
  .with-separator {
    position: relative;
  }
  .with-separator::before {
    content: "";
    position: absolute;
    /* extend into the frame padding so the line reaches the border */
    left: -5px;
    right: -5px;
    top: -1px;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; 
  }
  
  .value-table td:last-child {
    width: 50%; 
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}

  /* Row 18: Property Description table (Page 4) */
  .row-18-property-description {
    width: 100%;
    border-collapse: collapse; /* merge borders for grid look */
    table-layout: fixed; /* consistent column widths */
  }
  .row-18-property-description th,
  .row-18-property-description td {
    border-left: 1px solid black; /* vertical dividers */
    padding: 4px; /* compact cell padding */
    font-size: 12px; /* readable size */
    vertical-align: middle; /* align inputs nicely */
    text-align: left; /* left-align labels/content */
  }
  .row-18-property-description th:first-child,
  .row-18-property-description td:first-child {
    border-left: none; /* no extra line on the left edge */
  }
  .row-18-property-description th:last-child,
  .row-18-property-description td:last-child {
    border-right: none; /* let the page frame be the right edge */
  }
  /* In this table, do not underline data entry inputs */
  .row-18-property-description input {
    border: none;
    border-bottom: none;
    outline: none;
  }
/* FRAME 2 (4page document) */
.row-17{
  background-color: hwb(0 64% 35%);
  padding: 4px 8px;
  margin: 0 -5px; 
  font-size: 16px;  
  font-weight: bold;
}

.page-frame-2{
border: 1px solid black;
position: relative; /* context for absolutely positioned children */
padding: 5px; /* inner spacing from the frame edge */
}




  
  
```

Removed underlines for inputs inside `row-18-property-description` by overriding input borders within that table.

---

**User**

these lines do not reach the edges of the frame

---

**Cursor**

I'll adjust the property description table to bleed into the frame padding so its horizontal lines reach the frame edges.

```css
*** Begin Patch
*** Update File: [REDACTED_PATH]/project/style.css
@@
   .row-18-property-description {
     width: 100%;
     border-collapse: collapse; /* merge borders for grid look */
     table-layout: fixed; /* consistent column widths */
+    margin: 0 -5px; /* bleed into page-frame padding to reach borders */
   }
*** End Patch
```

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  
  /* Utility: add a horizontal separator without extra markup */
  .with-separator {
    position: relative;
  }
  .with-separator::before {
    content: "";
    position: absolute;
    /* extend into the frame padding so the line reaches the border */
    left: -5px;
    right: -5px;
    top: -1px;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* .indent-paragraph {
    text-indent: 2em;
    margin: 4px 0;
  } */
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%;
  }
  
  .value-table td:last-child {
    width: 50%;
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}

  /* Row 18: Property Description table (Page 4) */
  .row-18-property-description {
    width: 100%;
    border-collapse: collapse; /* merge borders for grid look */
    table-layout: fixed; /* consistent column widths */
    margin: 0 -5px; /* bleed into frame padding so horizontal lines reach borders */
  }
  .row-18-property-description th,
  .row-18-property-description td {
    border-left: 1px solid black; /* vertical dividers */

    padding: 4px; /* compact cell padding */
    font-size: 12px; /* readable size */
    vertical-align: middle; /* align inputs nicely */
    text-align: left; /* left-align labels/content */
  }
  .row-18-property-description th:first-child,
  .row-18-property-description td:first-child {
    border-left: none; /* no extra line on the left edge */
  }
  .row-18-property-description th:last-child,
  .row-18-property-description td:last-child {
    border-right: none; /* let the page frame be the right edge */
  }

  /* Лінія після другого рядка */
.row-18-property-description tr:nth-child(2) {
  border-bottom: 1px solid black;
}

/* Лінія після четвертого рядка */
.row-18-property-description tr:nth-child(4) {
  border-bottom: 1px solid black;
}


  
  /* In this table, do not underline data entry inputs */
  .row-18-property-description input {
    border: none;
    border-bottom: none;
    outline: none;
  }
/* FRAME 2 (4page document) */
.row-17{
  background-color: hwb(0 64% 35%);
  padding: 4px 8px;
  margin: 0 -5px; 
  font-size: 16px;  
  font-weight: bold;
}

.page-frame-2{
border: 1px solid black;
position: relative; /* context for absolutely positioned children */
padding: 5px; /* inner spacing from the frame edge */
}




  
  
```

- Extended `row-18-property-description` with `margin: 0 -5px` so its horizontal rules span to the frame borders, matching the frame padding.

If any lines still stop short, I can also add `border-right: 1px solid black` on the last cells or use a full-width pseudo-element per row.

---

**User**

It reaches the left but not the right edge.

---

**Cursor**

```css
/* Base */
body {
    font-family: Arial, Helvetica, sans-serif; /* typeface stack */
    margin: 20px; /* outer spacing around the page */
  }
  
  .page-frame {
    position: relative; /* context for absolutely positioned children */
    border: 1px solid black; /* frame border */
    padding: 5px; /* inner spacing from the frame edge */
  }
  
  
  /* Row 1: YEAR / BOROUGH / BLOCK / LOT / GROUP / REVIEWED BY */
  .row-1 {
    display: flex; /* enable flex layout */
    flex-direction: column; /* stack children vertically */
    height: 45px; /* reserved vertical space */
  }
  
  .row-1-top {
    display: flex; /* horizontal layout */
    justify-content: space-between; /* spread items across the row */
  }
  
  .word-block {
    display: flex; /* label + input arranged */
    flex-direction: column; /* stacked vertically */
    align-items: flex-start; /* left align content */
  }
  
  .word-block span:first-child {
    margin-bottom: 5px;
  }

  .row-1-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

    
  .separator {
    position: absolute; /* overlay horizontal rule */
    left: 0; right: 0; /* stretch full width */
    border-top: 1px solid black; /* the rule */
  }
  
  /* Utility: add a horizontal separator without extra markup */
  .with-separator {
    position: relative;
  }
  .with-separator::before {
    content: "";
    position: absolute;
    /* extend into the frame padding so the line reaches the border */
    left: -5px;
    right: -5px;
    top: -1px;
    border-top: 1px solid black;
  }
  

  .field-input {
    border: none; /* remove default border */
    border-bottom: 2px solid black; /* underline look */
    font-size: 14px; /* input text size */
    width: 100%; /* fill container width */
    padding: 0; /* no inner padding */
    margin: 0; /* no outer margin */
    box-sizing: border-box; /* include padding/border in width */
  }
  
  .field-input:focus {
    outline: none; /* rely on bottom border as focus indicator */
  }
  
  /* Row 2: Application header */
  .row-2-header {
    padding: 5px 0; /* vertical spacing around header */
  }
  
  .row-2-header-top {
    display: flex; /* row layout */
    justify-content: space-between; /* push logos to edges */
    align-items: flex-start; /* align to top */
  }
    
  
  .header-logo {
    width: 20%;           /* responsive width */
    max-width: 140px;     /* cap size */
    height: auto;         /* preserve aspect */
  }
  
  .logo-right {
    width: 30%;     /* right logo wider */
    max-width: 160px; 
  }
  
  .row-2-header-center-text {
    text-align: center; /* center header text */
    font-size: 24px;    /* larger heading */
    line-height: 1.3;   /* comfortable spacing */
  }
  
  .line-group {
    margin-bottom: 6px;
  }
  
  .header-center-text .line-group:first-child {
    margin-bottom: 20px; 
  }
  
  
  .row-2-instructions-text {
    font-size: 21px; /* prominent instruction */
    line-height: 1;  /* tight lines */
    text-align: left; /* left aligned */
    margin-top: 2px; /* small gap above */
  }

  
  .row-3-notice-text {
    font-size: 20px; /* body size */
    line-height: 1;  /* tight */
    margin-bottom: 5px; /* space after */
  }
  
  .row-3-notice-options label {
    display: inline-block; /* line up options horizontally */
    margin-right: 20px;    /* gap between options */
    font-size: 20px;
    line-height: 1;
    cursor: pointer;       /* clickable label */
  }
  
  .row-3-notice-options input[type="checkbox"] {
    margin-right: 5px; 
  }

  .row-4-instructions-block {
    font-size: 16px; /* normal body */
    line-height: 1;  /* compact */
    margin-top: 3px; /* small gap above */

  }

  .row-4-instructions-block p {
    margin: 0 0 4px 0; 
  }
  
  /* Row 5: Property Identification heading */
  .row-5 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
  }
  
  /* Row 6: Property Identification table */
  .row-6-table {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 0; /* flush to separator */
    table-layout: fixed; /* consistent column widths */
  }
  
  .row-6-table th, .row-6-table td {
    border-left: 1px solid black;  /* vertical dividers */
    padding: 4px;                  /* cell inner spacing */
    text-align: center;            /* center text */
    vertical-align: middle;        /* center vertically */
  }
  
  .row-6-table th:first-child,
  .row-6-table td:first-child {
    border-left: none;
  }
  
  .row-6-table th:last-child,
  .row-6-table td:last-child {
    border-right: none; 
  }
  
  .row-6-table th {
    font-size: 10px;
    white-space: nowrap; /* avoid wrapping */
    font-weight: normal; 
  }
  
  .row-6-table td input {
    width: 100%;
    box-sizing: border-box;
    border: none;          
    padding: 2px;
    text-align: center;
    font-size: 10px;
  }
  
  .table-row6 td input:focus {
    outline: none; 
  }
  
  .field-bold {
    font-weight: bold; 
  }

  /* Row 7: Full address */
  .row-7-full-address-input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

  }
  .row-7-full-address-label {
    font-size: 10px; 
    margin-bottom: 2px;
  }
  .row-7-full-address {
    margin-top: 3px;
  }

  /* Row 8: Applicant heading */
  .row-8 {
    background-color: hwb(0 64% 35%);
    padding: 4px 8px; /* inner spacing */
    margin: 0 -5px;  /* stretch to frame edges */
    font-size: 16px;        
  }
  .row-9-inline {
    display: flex;
    align-items: center;
    gap: 8px; /* inline spacing */
  }
  
  .form-input-inline {
    flex: 1;           /* grow to fill */
    border: none;
    border-bottom: 1px solid black;
    padding: 2px 4px;
    font-size: 12px;
    box-sizing: border-box; /* include padding in width */
  }
  
  .form-row{
    margin-top: 8px;
    font-size: 12px;
  }
  
  .checkbox-row-9 label {
    display: block; /* stack options */
    margin-bottom: 2px; /* small gap */
  }

  .board-authority-row {
    display: flex;        /* flexible layout for options */
    align-items: center;  /* align vertically */
    gap: 20px;            /* spacing between options */
    font-size: 16px;
    padding-left: 30px;   /* indentation */
    flex-wrap: wrap;      /* wrap when narrow */
  }
  
  .board-authority-row label {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  /* Row 10: Contact information heading */
  .row-10{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 11: Contact information table */
  .table-row-11-contact {
    width: 100%;
    border-collapse: collapse; /* grid-like table */
    margin: 0;          
    table-layout: fixed; /* consistent columns */
  }
  
  .table-row-11-contact th,
  .table-row-11-contact td {
    text-align: left;
    padding: 2px 4px;    
    font-size: 12px;
    font-weight: normal;  
    border-left: 1px solid black; /* vertical rule */
    border-bottom: none;
    height: 100%;       /* fill row height */
  }
  
  .table-row-11-contact th:first-child,
  .table-row-11-contact td:first-child {
    border-left: none;
  }
  
  .table-row-11-contact th:last-child,
  .table-row-11-contact td:last-child {
    border-right: none;
  }
  
  .table-input {
    width: 100%;
    border: none;
    padding: 2px 0;
    box-sizing: border-box; /* include padding in width */
    font-weight: normal; 
    color: black;
  }
  
  .table-input:focus {
    outline: none;
  }

  /* Row 12: Mailing and email table */
  .table-row-12-mailing-email {
    width: 100%;
    border-collapse: collapse; /* merge borders */
    margin-top: 2px;  /* small gap above */
  }
  
  .table-row-12-mailing-email td {
    padding: 2px 4px;
    vertical-align: top;
    font-size: 12px;
    position: relative; /* anchor pseudo divider */
  }
  

  .table-row-12-mailing-email td.with-vertical-line::after {
    content: "";
    position: absolute; /* draw a vertical rule */
    top: -2px;        /* extend to separator above */
    bottom: 0;       /* down to cell bottom */
    right: 0;        /* at right edge */
    width: 1px;      /* rule thickness */
    background-color: black; /* rule color */
  }
  
  
  .table-input:focus {
    outline: none;
  }

  /* Row 13: Valuation claim heading */
  .row-13{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }

  .value-table {
    width: 100%;
    border-collapse: collapse; /* clean table borders */
    font-size: 16px; /* readable text */
    line-height: 1.5; /* relaxed spacing */
  }
  
  .value-table td {
    padding: 5px 10px;
    vertical-align: bottom;
  }
  
  .value-table td:first-child {
    width: 50%; 
  }
  
  .value-table td:last-child {
    width: 50%;
    text-align: left;
  }
  
  .line-input {
    border: none; /* remove default border */
    border-bottom: 1px solid black; /* underline style */
    width: 260px;  /* visual width */
  }
  
  .line-input:focus {
    outline: none;
  }
  
  .note {
    margin-top: 6px; /* gap above */
    font-size: 16px; /* size */
    line-height: 1.4; /* spacing */
    margin: 2px 0;  /* vertical margins */
  }
  
  
 

  /* Row 15: Hearing request heading */
  .row-15{
    background-color: hwb(0 64% 35%);
    padding: 4px 8px;
    margin: 0 -5px; 
    font-size: 16px;  
    font-weight: bold;
  }
  /* Row 16: Hearing request block */
  .hearing-row-16 {
    display: flex; /* left/right columns */
    align-items: stretch; /* equal heights */
    width: 100%;
    
    border-top: 1px solid transparent; /* keep background clean near separator */
  }
  
  .row-16-hearing-left {
    flex: 0 0 75%; /* width share */
    padding: 4px 0 4px 4px; /* inner spacing */
    position: relative; /* for divider pseudo-element */
  }
  
  .row-16-hearing-left::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;      
    width: 1px;   
    height: 100%;   
    background-color: black;
  }
  
  
  .row-16-hearing-right {
    flex: 1;              /* take remaining width */
    background-color: #f0f0f0; /* gray panel */
    
    margin-right: -5px;   /* bleed to frame edge */
    margin-bottom: -5px;  /* bleed to bottom edge */
    padding: 4px 9px 9px 4px; /* inner spacing */
    box-sizing: border-box; /* include padding */
    position: relative; /* context for inner */
  }
  
  
  .arrow {
    font-size: 20px; /* arrow size */
    line-height: 4; /* push arrow down */
    text-align: right; /* align arrow */
    font-weight: bold; /* heavier arrow */


  }
  .or-block{
    padding-left: 40%; /* visual centering of OR */
  }
  
  .date-received {
    text-align: left;
    padding: 5px; /* breathing room */
    font-weight: bold;

  }

  
  .initials-input {
    width: 80px;
    padding: 2px 5px;
    margin-left: 5px;
  }

  input[name="signerInitials"] {
    border: none;        /* remove border */
    border-bottom: 1px solid black; /* underline */
    outline: none;       /* remove focus ring */
    width: 80px;         /* width */
    font-size: 14px;     /* text size */
  }
  

/* Lists */
ol {
  padding-left: 2.5rem; /* list indent */
}

ul {
  padding-left: 1.5rem; /* list indent */
}

  /* Row 18: Property Description table (Page 4) */
  .row-18-property-description {
    width: 100%;
    border-collapse: collapse; /* merge borders for grid look */
    table-layout: fixed; /* consistent column widths */
    margin: 0 -5px; /* bleed into frame padding so horizontal lines reach borders */
  }
  .row-18-property-description th,
  .row-18-property-description td {
    border-left: 1px solid black; /* vertical dividers */

    padding: 4px; /* compact cell padding */
    font-size: 12px; /* readable size */
    vertical-align: middle; /* align inputs nicely */
    text-align: left; /* left-align labels/content */
  }
  .row-18-property-description th:first-child,
  .row-18-property-description td:first-child {
    border-left: none; /* no extra line on the left edge */
  }
  .row-18-property-description th:last-child,
  .row-18-property-description td:last-child {
    border-right: none; /* let the page frame be the right edge */
  }

/* Full-bleed horizontal lines after 2nd and 4th rows */
.row-18-property-description tr:nth-child(2),
.row-18-property-description tr:nth-child(4) {
  position: relative; /* anchor the pseudo separator */
  border-bottom: none; /* we'll draw a custom full-bleed line */
}
.row-18-property-description tr:nth-child(2)::after,
.row-18-property-description tr:nth-child(4)::after {
  content: "";
  position: absolute;
  left: -5px;  /* bleed into frame padding */
  right: -5px; /* bleed into frame padding */
  bottom: -1px;
  height: 1px;
  background: black;
}


  
  /* In this table, do not underline data entry inputs */
  .row-18-property-description input {
    border: none;
    border-bottom: none;
    outline: none;
  }
/* FRAME 2 (4page document) */
.row-17{
  background-color: hwb(0 64% 35%);
  padding: 4px 8px;
  margin: 0 -5px; 
  font-size: 16px;  
  font-weight: bold;
}

.page-frame-2{
border: 1px solid black;
position: relative; /* context for absolutely positioned children */
padding: 5px; /* inner spacing from the frame edge */
}




  
  
```

I switched those table row borders to pseudo-elements that extend left and right by 5px, so the lines now reach the right edge as well.



---

**User**

Please help me to create a step-by-step plan on how to implement the validation of required form fields and the logic for saving the entered data to a JSON file and then importing this file into the form. Write the steps step by step, and you can also show a code example.

Explain:
- how to check if the user has filled in the required fields;
- how to generate a JSON object with the form data;
- how to restore the data back to the form when importing JSON.

I already have the HTML ready, you don't need to change it - just focus on the existing structure. If you have any tips on how to improve the implementation or make the code cleaner - write them too.

---

**Cursor**

### Goal
Implement client‑side validation for required fields, export current form data to a JSON file, and import that JSON to restore the form values — without changing your existing HTML.

### Step‑by‑step plan

1) Identify required fields
- Use the existing `required` attribute in your HTML wherever a field is mandatory.
- In JS, select `form.querySelectorAll('[required]')` to validate them.

2) Validate required fields on submit
- For text-like fields: check `.value.trim().length > 0`.
- For `radio` groups: require at least one `input[type="radio"][name="X"]:checked`.
- For `checkbox` groups: if any group is required, require at least one checked.
- Add error styles/messages (e.g., add `.is-invalid`, set `aria-invalid="true"`, insert a small inline message), and focus the first invalid field.

3) Build a JSON object from the form
- Use `FormData(form)` to collect values.
- Convert to a plain object:
  - Single-value fields: `name: value`.
  - Repeated names (checkboxes, multi-select): `name: [values...]`.
- For multi-selects, read `select.selectedOptions`.
- Skip unchecked checkboxes/radios (standard web behavior).

4) Download JSON to a file
- Create a Blob from `JSON.stringify(data, null, 2)`.
- Create a temporary anchor and trigger `download` (e.g., `form-data.json`).

5) Import JSON and restore the form
- Add a file input (or reuse an existing one) with `accept="application/json"`.
- Read the file with `File.text()` and `JSON.parse`.
- For each `name → value`:
  - Text/textarea/select (single): set `el.value = value`.
  - Select multiple: set `option.selected = true` for values in the array.
  - Radios: check the radio whose `value` matches.
  - Checkboxes:
    - If the JSON has an array for that `name`, check those whose values are in the array.
    - If the JSON has a boolean and there’s only one checkbox with that `name`, set `checked = value`.

6) Optional UX improvements
- Live validation on blur for required fields.
- Error summary at top if there are multiple errors.
- Debounce save-to-JSON button if it’s clickable often.

---

### Example JavaScript (drop-in)

```javascript
// Wire this to your existing form id and buttons/inputs by id.
const form = document.getElementById('myForm');
const saveBtn = document.getElementById('saveJsonBtn');      // e.g., a "Save JSON" button
const importInput = document.getElementById('importJsonFile'); // <input type="file" accept="application/json">

// ---------- Validation ----------
function validateRequiredFields(formEl) {
  clearAllFieldErrors(formEl);

  const requiredFields = Array.from(formEl.querySelectorAll('[required]'));
  const invalids = [];

  // Track processed radio/checkbox groups to avoid duplicate checks
  const processedGroups = new Set();

  for (const field of requiredFields) {
    const type = (field.type || '').toLowerCase();
    const name = field.name;

    if (!name) continue;

    if (type === 'radio' || type === 'checkbox') {
      // Validate by group (name)
      if (processedGroups.has(name)) continue;
      processedGroups.add(name);

      const group = formEl.querySelectorAll(`input[name="${CSS.escape(name)}"][type="${type}"]`);
      const isChecked = Array.from(group).some(i => i.checked);

      if (!isChecked) {
        // Attach the error to the first input of the group for usability
        showFieldError(group[0], 'Please select at least one option.');
        invalids.push(group[0]);
      }
      continue;
    }

    // Text-like fields
    const value = String(field.value || '').trim();
    if (value.length === 0) {
      showFieldError(field, 'This field is required.');
      invalids.push(field);
    }
  }

  if (invalids.length > 0) {
    invalids[0].focus();
    return false;
  }
  return true;
}

function showFieldError(field, message) {
  field.classList.add('is-invalid');
  field.setAttribute('aria-invalid', 'true');

  // Avoid duplicate messages
  const existing = field.parentElement.querySelector('.field-error');
  if (existing) existing.remove();

  const msg = document.createElement('div');
  msg.className = 'field-error';
  msg.textContent = message;
  msg.setAttribute('role', 'alert');
  msg.style.color = '#c62828';
  msg.style.fontSize = '0.875rem';
  msg.style.marginTop = '4px';

  field.parentElement.appendChild(msg);
}

function clearAllFieldErrors(formEl) {
  formEl.querySelectorAll('.is-invalid').forEach(el => {
    el.classList.remove('is-invalid');
    el.removeAttribute('aria-invalid');
  });
  formEl.querySelectorAll('.field-error').forEach(el => el.remove());
}

// ---------- Form -> JSON ----------
function formToJson(formEl) {
  const data = {};
  const formData = new FormData(formEl);

  // First pass: collect values by name
  for (const [name, value] of formData.entries()) {
    if (name in data) {
      // Convert to array if repeated
      if (!Array.isArray(data[name])) data[name] = [data[name]];
      data[name].push(value);
    } else {
      data[name] = value;
    }
  }

  // Handle multi-selects explicitly so all selections are captured consistently
  for (const select of formEl.querySelectorAll('select[multiple]')) {
    const name = select.name;
    if (!name) continue;
    const values = Array.from(select.selectedOptions).map(o => o.value);
    data[name] = values;
  }

  // Optional: represent single checkboxes (without explicit value) as booleans
  // If you want this behavior, uncomment:
  /*
  const singleCheckboxes = formEl.querySelectorAll('input[type="checkbox"]');
  for (const cb of singleCheckboxes) {
    if (!cb.name) continue;
    const group = formEl.querySelectorAll(`input[type="checkbox"][name="${CSS.escape(cb.name)}"]`);
    if (group.length === 1) {
      data[cb.name] = cb.checked;
    }
  }
  */

  return data;
}

// ---------- JSON -> Download ----------
function downloadJson(data, filename = 'form-data.json') {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ---------- JSON -> Form ----------
function jsonToForm(formEl, data) {
  if (!data || typeof data !== 'object') return;

  // Clear errors when importing
  clearAllFieldErrors(formEl);

  for (const [name, value] of Object.entries(data)) {
    const fields = formEl.querySelectorAll(`[name="${CSS.escape(name)}"]`);
    if (!fields.length) continue;

    const first = fields[0];
    const type = (first.type || '').toLowerCase();

    if (type === 'radio') {
      // Expect string value
      fields.forEach(r => { r.checked = String(r.value) === String(value); });
      continue;
    }

    if (type === 'checkbox') {
      // Support array (group) or boolean (single)
      if (Array.isArray(value)) {
        fields.forEach(cb => { cb.checked = value.map(String).includes(String(cb.value)); });
      } else if (typeof value === 'boolean' && fields.length === 1) {
        fields[0].checked = value;
      } else {
        // If single string value provided, match by value
        fields.forEach(cb => { cb.checked = String(cb.value) === String(value); });
      }
      continue;
    }

    if (first.tagName.toLowerCase() === 'select') {
      const isMultiple = first.hasAttribute('multiple');
      if (isMultiple) {
        const values = Array.isArray(value) ? value.map(String) : [String(value)];
        first.querySelectorAll('option').forEach(opt => {
          opt.selected = values.includes(String(opt.value));
        });
      } else {
        first.value = String(value);
      }
      continue;
    }

    // Inputs, textarea, etc.
    fields.forEach(f => { f.value = value == null ? '' : String(value); });
  }
}

// ---------- Event wiring ----------
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateRequiredFields(form)) return;

  const json = formToJson(form);
  // You can send `json` to a server here instead of download
  downloadJson(json, 'form-data.json');
});

saveBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  if (!validateRequiredFields(form)) return;

  const json = formToJson(form);
  downloadJson(json, 'form-data.json');
});

importInput?.addEventListener('change', async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const data = JSON.parse(text);
    jsonToForm(form, data);
  } catch {
    alert('Invalid JSON file.');
  } finally {
    e.target.value = '';
  }
});
```

Minimal HTML wiring (example; no structural change to your layout needed):
```html
<!-- Ensure your form has an id and your buttons/inputs have matching ids -->
<form id="myForm">
  <!-- your existing fields with proper name=... and required where needed -->
  <button type="submit">Submit & Download JSON</button>
  <button type="button" id="saveJsonBtn">Save JSON</button>
  <input type="file" id="importJsonFile" accept="application/json" />
</form>
```

### How each requirement is addressed

- How to check if required fields are filled:
  - Use `validateRequiredFields(form)` which checks text-like fields, radio groups, and checkbox groups, sets `aria-invalid`, adds an inline message, and focuses the first invalid field.

- How to generate a JSON object:
  - Use `formToJson(form)` built on `FormData(form)`. It collects repeated names into arrays and handles multi-selects.

- How to restore data on import:
  - Use `jsonToForm(form, data)` which sets values back for inputs, textareas, selects (single/multiple), radio groups, and checkbox groups (array or boolean semantics).

### Tips to keep it clean and robust

- Ensure every control that must be saved/restored has a unique and meaningful `name`.
- Prefer `required` in HTML for built-in UX, and layer JS validation for groups and custom messages.
- Keep validation UI separate from logic (helpers like `showFieldError`, `clearAllFieldErrors`).
- If you need persistence beyond download/upload, save to a backend via `fetch` instead of `downloadJson`.
- For accessibility, set `aria-invalid="true"` on invalid fields and use inline messages with `role="alert"`.
- For complex forms, consider a schema (e.g., Zod/Yup) to validate the JSON shape during import.

If you want, I can adapt the example to your specific field names and types from your `index.html`.

```javascript
// Wire this to your existing form id and buttons/inputs by id.
const form = document.getElementById('myForm');
const saveBtn = document.getElementById('saveJsonBtn');      // e.g., a "Save JSON" button
const importInput = document.getElementById('importJsonFile'); // <input type="file" accept="application/json">

// ---------- Validation ----------
function validateRequiredFields(formEl) {
  clearAllFieldErrors(formEl);

  const requiredFields = Array.from(formEl.querySelectorAll('[required]'));
  const invalids = [];

  // Track processed radio/checkbox groups to avoid duplicate checks
  const processedGroups = new Set();

  for (const field of requiredFields) {
    const type = (field.type || '').toLowerCase();
    const name = field.name;

    if (!name) continue;

    if (type === 'radio' || type === 'checkbox') {
      // Validate by group (name)
      if (processedGroups.has(name)) continue;
      processedGroups.add(name);

      const group = formEl.querySelectorAll(`input[name="${CSS.escape(name)}"][type="${type}"]`);
      const isChecked = Array.from(group).some(i => i.checked);

      if (!isChecked) {
        // Attach the error to the first input of the group for usability
        showFieldError(group[0], 'Please select at least one option.');
        invalids.push(group[0]);
      }
      continue;
    }

    // Text-like fields
    const value = String(field.value || '').trim();
    if (value.length === 0) {
      showFieldError(field, 'This field is required.');
      invalids.push(field);
    }
  }

  if (invalids.length > 0) {
    invalids[0].focus();
    return false;
  }
  return true;
}

function showFieldError(field, message) {
  field.classList.add('is-invalid');
  field.setAttribute('aria-invalid', 'true');

  // Avoid duplicate messages
  const existing = field.parentElement.querySelector('.field-error');
  if (existing) existing.remove();

  const msg = document.createElement('div');
  msg.className = 'field-error';
  msg.textContent = message;
  msg.setAttribute('role', 'alert');
  msg.style.color = '#c62828';
  msg.style.fontSize = '0.875rem';
  msg.style.marginTop = '4px';

  field.parentElement.appendChild(msg);
}

function clearAllFieldErrors(formEl) {
  formEl.querySelectorAll('.is-invalid').forEach(el => {
    el.classList.remove('is-invalid');
    el.removeAttribute('aria-invalid');
  });
  formEl.querySelectorAll('.field-error').forEach(el => el.remove());
}

// ---------- Form -> JSON ----------
function formToJson(formEl) {
  const data = {};
  const formData = new FormData(formEl);

  // First pass: collect values by name
  for (const [name, value] of formData.entries()) {
    if (name in data) {
      // Convert to array if repeated
      if (!Array.isArray(data[name])) data[name] = [data[name]];
      data[name].push(value);
    } else {
      data[name] = value;
    }
  }

  // Handle multi-selects explicitly so all selections are captured consistently
  for (const select of formEl.querySelectorAll('select[multiple]')) {
    const name = select.name;
    if (!name) continue;
    const values = Array.from(select.selectedOptions).map(o => o.value);
    data[name] = values;
  }

  // Optional: represent single checkboxes (without explicit value) as booleans
  // If you want this behavior, uncomment:
  /*
  const singleCheckboxes = formEl.querySelectorAll('input[type="checkbox"]');
  for (const cb of singleCheckboxes) {
    if (!cb.name) continue;
    const group = formEl.querySelectorAll(`input[type="checkbox"][name="${CSS.escape(cb.name)}"]`);
    if (group.length === 1) {
      data[cb.name] = cb.checked;
    }
  }
  */

  return data;
}

// ---------- JSON -> Download ----------
function downloadJson(data, filename = 'form-data.json') {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ---------- JSON -> Form ----------
function jsonToForm(formEl, data) {
  if (!data || typeof data !== 'object') return;

  // Clear errors when importing
  clearAllFieldErrors(formEl);

  for (const [name, value] of Object.entries(data)) {
    const fields = formEl.querySelectorAll(`[name="${CSS.escape(name)}"]`);
    if (!fields.length) continue;

    const first = fields[0];
    const type = (first.type || '').toLowerCase();

    if (type === 'radio') {
      // Expect string value
      fields.forEach(r => { r.checked = String(r.value) === String(value); });
      continue;
    }

    if (type === 'checkbox') {
      // Support array (group) or boolean (single)
      if (Array.isArray(value)) {
        fields.forEach(cb => { cb.checked = value.map(String).includes(String(cb.value)); });
      } else if (typeof value === 'boolean' && fields.length === 1) {
        fields[0].checked = value;
      } else {
        // If single string value provided, match by value
        fields.forEach(cb => { cb.checked = String(cb.value) === String(value); });
      }
      continue;
    }

    if (first.tagName.toLowerCase() === 'select') {
      const isMultiple = first.hasAttribute('multiple');
      if (isMultiple) {
        const values = Array.isArray(value) ? value.map(String) : [String(value)];
        first.querySelectorAll('option').forEach(opt => {
          opt.selected = values.includes(String(opt.value));
        });
      } else {
        first.value = String(value);
      }
      continue;
    }

    // Inputs, textarea, etc.
    fields.forEach(f => { f.value = value == null ? '' : String(value); });
  }
}

// ---------- Event wiring ----------
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateRequiredFields(form)) return;

  const json = formToJson(form);
  // You can send `json` to a server here instead of download
  downloadJson(json, 'form-data.json');
});

saveBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  if (!validateRequiredFields(form)) return;

  const json = formToJson(form);
  downloadJson(json, 'form-data.json');
});

importInput?.addEventListener('change', async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const data = JSON.parse(text);
    jsonToForm(form, data);
  } catch {
    alert('Invalid JSON file.');
  } finally {
    e.target.value = '';
  }
});
```

```html
<!-- Ensure your form has an id and your buttons/inputs have matching ids -->
<form id="myForm">
  <!-- your existing fields with proper name=... and required where needed -->
  <button type="submit">Submit & Download JSON</button>
  <button type="button" id="saveJsonBtn">Save JSON</button>
  <input type="file" id="importJsonFile" accept="application/json" />
</form>
```


