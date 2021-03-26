function ListarAlunosController($scope) {
    $scope.alunos = [];

    $scope.addAluno = function() {
        $scope.alunos.push({
            nome: $scope.aluno.nome,
            email: $scope.aluno.email,
            whatsapp: $scope.aluno.whatsapp,
        });
    
        $scope.aluno.nome = $scope.aluno.email = $scope.aluno.whatsapp = ''; 
    }
}