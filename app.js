const statusEl = document.getElementById('status');
const form = document.getElementById('intakeForm');
let supabaseClient = null;
try { supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY); } catch(e) {}
function setStatus(msg, ok=false){ statusEl.textContent = msg; statusEl.className = 'status ' + (ok ? 'ok' : 'err'); }
form.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  if (!supabaseClient || !SUPABASE_PUBLISHABLE_KEY || SUPABASE_PUBLISHABLE_KEY.includes('PASTE_')) {
    setStatus('Supabase is not configured yet. Please contact reception.'); return;
  }
  const fd = new FormData(form);
  const payload = {
    full_name: (fd.get('full_name')||'').trim(),
    id_number: (fd.get('id_number')||'').trim(),
    dob: fd.get('dob') || null,
    sex: fd.get('sex') || '',
    phone: (fd.get('phone')||'').trim(),
    email: (fd.get('email')||'').trim(),
    address: (fd.get('address')||'').trim(),
    occupation: (fd.get('occupation')||'').trim(),
    employer_work: (fd.get('employer_work')||'').trim(),
    medical_aid: fd.get('medical_aid') || 'Cash',
    medical_aid_no: (fd.get('medical_aid_no')||'').trim(),
    main_member: (fd.get('main_member')||'').trim(),
    referring_doctor: (fd.get('referring_doctor')||'').trim(),
    status: 'pending'
  };
  setStatus('Submitting...');
  const { error } = await supabaseClient.from('pending_intake').insert(payload);
  if (error) { setStatus('Could not submit registration: ' + error.message); return; }
  form.reset(); setStatus('Thank you. Your details were sent to reception.', true);
});
