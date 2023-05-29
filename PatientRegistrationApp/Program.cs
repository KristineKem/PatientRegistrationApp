using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using PatientRegistrationApp;
using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Core.Services;
using PatientRegistrationApp.Core.Validation;
using PatientRegistrationApp.Data;
using PatientRegistrationApp.Handlers;
using PatientRegistrationApp.Services;
using PatientRegistrationApp.Services.Validators;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication("BasicAuthentication")
    .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);
builder.Services.AddDbContext<PatientRegistrationAppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("patient-registration")));
builder.Services.AddLogging(loggingBuilder => loggingBuilder.AddConsole());
builder.Services.AddSingleton<IMapper>(AutoMapperConfig.CreateMapper());
builder.Services.AddTransient<IPatientRegistrationAppDbContext, PatientRegistrationAppDbContext>();
builder.Services.AddScoped<ICommonService<Patient>, CommonService<Patient>>();
builder.Services.AddScoped<IPatientService, PatientService>();
builder.Services.AddScoped<IValidate, DoctorValidator>();
builder.Services.AddScoped<IValidate, PatientCodeValidator>();
builder.Services.AddScoped<IValidate, PatientNameValidator>();
builder.Services.AddScoped<IValidate, PatientSexValidator>();
builder.Services.AddScoped<IValidate, PatientTownValidator>();
builder.Services.AddScoped<IValidate, PatientValidator>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();

app.Run();
