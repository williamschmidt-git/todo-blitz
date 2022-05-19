import chai from 'chai';
import sinon from 'sinon';
import chaiHttp = require('chai-http');

import { describe } from 'mocha';
import app from '../../app';
import TasksModel from '../../database/models/Tasks.model';
import { Response } from 'superagent';
import { allTasks, errorService } from './mocks/TasksMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('/GET: In case of success: ', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    chaiHttpResponse = await chai.request(app).get('/');
    sinon.stub(TasksModel, 'findAll').resolves(allTasks as any);
  });

  after(() => {
    (TasksModel.findAll as sinon.SinonStub).restore();
  });
  
  it('Should be with code 200', async () => {
    expect(chaiHttpResponse).to.have.status(200);
    
  });

  it('Should be an array with correct elements', async () => {
    expect(chaiHttpResponse.body).to.be.an('array');
    expect(chaiHttpResponse.body[0]).to.be.deep.equal(allTasks[0])
  });
});

describe('/GET: In case of failure: ', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(TasksModel, 'findAll').resolves([]);
    chaiHttpResponse = await chai.request(app).get('/');
  });

  after(() => {
    (TasksModel.findAll as sinon.SinonStub).restore();
  });

  it('Should return an error code 400', () => {
    expect(chaiHttpResponse).to.have.status(400);
  })

  it('Should be an error message', () => {
    expect(chaiHttpResponse.body).to.have.property('message').equal('There isnt any tasks')
  })
})