<?php
// config.php
// Chave secreta para assinar e verificar o JWT. Mantenha em um arquivo .env real
// Em produção, isso deve ser MUITO mais longo e armazenado em um local seguro.
define('JWT_SECRET_KEY', 'MinhaChaveSecretaMuitoForteParaAssinaturaJWT123456');

// URL base da API para evitar problemas de CORS no desenvolvimento
// (Ajuste para a URL real do seu front-end em produção)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
?>