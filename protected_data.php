<?php
// protected_data.php
require_once 'auth_service.php';

// O middleware (validate_jwt) verifica o token. Se for inválido, ele morre com 401.
$user_payload = validate_jwt(); 

// Se chegou aqui, o token é VÁLIDO.
http_response_code(200);
echo json_encode([
    "message" => "Acesso aos Dados Corporativos Concedido.",
    "data" => [
        "relatorio_id" => 54321,
        "nivel_acesso" => $user_payload->role,
        "usuario_id_no_token" => $user_payload->uid,
        "detalhes" => "Este é um dado sensível que só deve ser visto por usuários autenticados via JWT."
    ]
]);
?>