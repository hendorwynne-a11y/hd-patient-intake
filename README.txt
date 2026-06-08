HD Patient Intake - GitHub Pages Export

Upload these files to your hd-patient-intake GitHub repository:
- index.html
- styles.css
- app.js
- config.js
- hendors_hd10_reporting_logo.png

Before uploading, open config.js and replace PASTE_YOUR_PUBLISHABLE_KEY_HERE with your Supabase publishable key.

Supabase required table: pending_intake
Columns:
full_name text, id_number text, dob date, sex text, phone text, email text, address text, occupation text, employer_work text, medical_aid text, medical_aid_no text, main_member text, referring_doctor text, status text

Then enable GitHub Pages: Settings > Pages > Deploy from branch > main > root.
