export default class PratoService {
  constructor(resource) {
    this._resource = resource('v1/pratos{/id}');
  }

  lista() {
    return this._resource.query().then(
      (res) => res.json(),
      (err) => {
        console.log(err);
        throw new Error('Não foi possível obter o cardapio');
      }
    );
  }

  cadastra(prato) {
    if (prato._id) {
      return this._resource.update({ id: prato._id }, prato);
    } else {
      return this._resource.save(prato);
    }
  }

  apaga(id) {
    return this._resource.delete({ id }).then(null, (err) => {
      console.log(err);
      throw new Error('Não foi possível remover o prato');
    });
  }

  busca(id) {
    return this._resource.get({ id }).then((res) => res.json());
  }
}
