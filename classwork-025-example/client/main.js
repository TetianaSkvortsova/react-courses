const usersEl = document.getElementById('users');
const emptyEl = document.getElementById('empty');
const form = document.getElementById('userForm');
const clearBtn = document.getElementById('clearBtn');

const serverBaseUrl = 'http://localhost:3000';
const api = {
  list: () => {
    return fetch(`${serverBaseUrl}/api/users`)
      .then(r => r.json())
  },
  create: (payload) => fetch(`${serverBaseUrl}/api/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  }).then(r => r.json()),
  remove: (id) => fetch(`${serverBaseUrl}/api/users/${id}`, { method: 'DELETE' }).then(r => r.text())
}

function sanitize(s) {
  const el = document.createElement('div');
  el.textContent = s;
  return el.innerHTML;
}

function avatarFor(name) {
  if (!name) return 'U';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function render(users) {
  usersEl.innerHTML = '';
  if (!users || users.length === 0) {
    emptyEl.style.display = 'block';
    return;
  }
  emptyEl.style.display = 'none';

  users.forEach(user => {
    const wrap = document.createElement('div');
    wrap.className = 'user';

    const meta = document.createElement('div');
    meta.className = 'meta';

    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = avatarFor(user.fullname || user.name || user.login);

    const info = document.createElement('div');
    info.className = 'info';
    const nameEl = document.createElement('div');
    nameEl.className = 'name';
    nameEl.innerHTML = sanitize(user.fullname || user.name || '—');
    const loginEl = document.createElement('div');
    loginEl.className = 'login';
    loginEl.textContent = user.login || '';

    info.appendChild(nameEl);
    info.appendChild(loginEl);
    meta.appendChild(avatar);
    meta.appendChild(info);

    const actions = document.createElement('div');
    actions.className = 'actions';
    const del = document.createElement('button');
    del.className = 'delete-btn';
    del.textContent = 'Delete';
    del.addEventListener('click', async () => {
      del.disabled = true;
      try {
        await api.remove(user.id);
        await refresh();
      } catch (err) {
        console.error(err);
        alert('Could not delete');
      } finally { del.disabled = false }
    });
    actions.appendChild(del);

    wrap.appendChild(meta);
    wrap.appendChild(actions);

    usersEl.appendChild(wrap);
  });
}

async function refresh() {
  try {
    const users = await api.list();
    render(users);
  } catch (err) {
    console.error('Failed to fetch users', err);
    emptyEl.textContent = 'Failed to load users';
    emptyEl.style.display = 'block';
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const payload = {
    name: fd.get('name'),
    login: fd.get('login')
  };
  const submit = form.querySelector('button[type="submit"]');
  submit.disabled = true;
  try {
    const created = await api.create(payload);
    form.reset();
    await refresh();
    // highlight created user for a moment
    const nodes = Array.from(document.querySelectorAll('.user .name'));
    const match = nodes.find(n => n.textContent === (created.fullname || created.name));
    if (match) {
      match.parentElement.parentElement.style.boxShadow = '0 6px 24px rgba(110,231,183,0.08)';
      setTimeout(() => { match.parentElement.parentElement.style.boxShadow = ''; }, 1200);
    }
  } catch (err) {
    console.error(err);
    alert('Could not create user');
  } finally { submit.disabled = false }
});

clearBtn.addEventListener('click', () => { form.reset(); });

// initial load
refresh();
