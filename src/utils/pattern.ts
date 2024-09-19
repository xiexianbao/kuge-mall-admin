export default {
  phone: /^1[3-9]\d{9}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/ // 至少8位且必有数字+字母+特殊字符
}