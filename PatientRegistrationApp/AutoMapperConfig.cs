using AutoMapper;
using PatientRegistrationApp.Core.Models;
using PatientRegistrationApp.Models;

namespace PatientRegistrationApp
{
    public static class AutoMapperConfig
    {
        public static IMapper CreateMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<PatientSearchForm, Patient>()
                    .ForMember(m => m.PatientDoctor, 
                        opt => opt.Ignore());
                cfg.CreateMap<Patient, PatientSearchForm>();

            });

            config.AssertConfigurationIsValid();

            return config.CreateMapper();
        }
    }
}
